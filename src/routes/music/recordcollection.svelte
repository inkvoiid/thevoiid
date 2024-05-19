<script lang="ts">
	import { error } from '@sveltejs/kit';
	import RecordShelf from './recordshelf.svelte';
	import type { Record } from './recordshelf.svelte';
	const DISCOGS_API_KEY = import.meta.env.VITE_DISCOGS_API_KEY;
	const DISCOGS_API_SECRET = import.meta.env.VITE_DISCOGS_API_SECRET;
	const LASTFM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

	type DiscogsRecordInfo = {
		instance_id: any;
		artist?: any;
		basic_information: {
			title: any;
			artists: [
				{
					name: any;
				}
			];
			year: any;
			cover_image: any;
		};
	};

	let recordCollectionStatus = 'Loading';

	let records: Record[] = [];
	let beatlesRecords: Record[] = [];

	async function fetchRecords(): Promise<Record[]> {
		try {
			recordCollectionStatus = 'Fetching data from Discogs';
			// Fetch Discogs data
			if (DISCOGS_API_KEY === undefined) {
				recordCollectionStatus = 'No Discogs API Key - Contact Site Owner';
				throw error(401, 'No Discogs API Key');
			}
			if (DISCOGS_API_SECRET === undefined) {
				recordCollectionStatus = 'No Discogs API Secret - Contact Site Owner';
				throw error(401, 'No Discogs API Secret');
			}
			const discogsResponse = await fetch(
				'https://api.discogs.com/users/inkvoiid/collection/folders/0/releases?per_page=250',
				{
					headers: {
						Authorization: `Discogs key=${DISCOGS_API_KEY}, secret=${DISCOGS_API_SECRET}`
					}
				}
			);

			// Fetched Discogs Data
			const discogsData = await discogsResponse
				.json()
				.then(async (returnedData) => {
					recordCollectionStatus = 'Discogs data recieved';

					// Map Discogs releases to the desired album object
					recordCollectionStatus = 'Mapping data';
					let discogsAlbums: Record[] = returnedData.releases.map((release: DiscogsRecordInfo) => ({
						id: release.instance_id,
						title: release.basic_information.title,
						artist: release.basic_information.artists[0].name,
						year: release.basic_information.year,
						image: release.basic_information.cover_image
					}));

					// Remove (2) from some artist names
					recordCollectionStatus = 'Tidying up broken data';
					discogsAlbums.forEach((entry: any) => {
						const match = entry.artist.match(/\(\d+\)$/);
						if (match) {
							entry.artist = entry.artist.slice(0, -match[0].length - 1);
						}
					});

					// Fetch better images from Last.fm
					recordCollectionStatus = 'Finding better album art on Last.fm';
					async function loadBetterImages() {
						try {
							const albumsWithBetterArt = discogsAlbums.map(async (entry: any) => {
								try {
									const response = await fetch(
										`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LASTFM_API_KEY}&artist=${encodeURIComponent(
											entry.artist
										)}&album=${encodeURIComponent(entry.title)}&format=json`
									);
									const data = await response.json();

									if (data.album) {
										const image = data.album.image
											? data.album.image.find((img: any) => img.size === '')['#text'] || ''
											: '';

										if (image !== '' && !image.endsWith('spacer.gif')) {
											entry.image = image;
										}
									}
								} catch (error) {
									console.error('Error fetching data:', error);
									throw error;
								}
							});

							// Wait for all fetch operations to complete
							await Promise.all(albumsWithBetterArt);
						} catch (error) {
							recordCollectionStatus = "Couldn't reach Last.fm";
							console.error('Error loading better images:', error);
						}
					}

					await loadBetterImages();

					// Set default image if necessary
					discogsAlbums.forEach((entry: any) => {
						if (!entry.image || entry.image.endsWith('spacer.gif')) {
							entry.image = 'images/nocover.png';
						}
					});

					recordCollectionStatus = 'Almost ready';
					return discogsAlbums;
				})
				.catch((error: any) => {
					recordCollectionStatus = "Couldn't reach Discogs";
					throw error(error);
				});
			return discogsData;
		} catch (error) {
			console.error('Error fetching records:', error);
			throw error;
		}
	}

	async function sortRecords() {
		if (records.length <= 1) {
			return;
		}

		// Sort the filtered collection by artist name and album name
		records.sort((a, b) => {
			// Remove "the" from the beginning of artist names
			const artistA = a.artist.replace(/^the /i, '');
			const artistB = b.artist.replace(/^the /i, '');

			if (artistA < artistB) {
				return -1;
			}
			if (artistA > artistB) {
				return 1;
			}
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});

		// Remove records from John Lennon, Paul McCartney, George Harrison, Ringo Starr, The Beatles, Traveling Wilburys, and Wings
		const filteredCollection = records.filter((album) => {
			if (
				album.artist === 'John Lennon' ||
				album.artist === 'Paul McCartney' ||
				album.artist === 'Paul & Linda McCartney' ||
				album.artist === 'George Harrison' ||
				album.artist === 'Ringo Starr' ||
				album.artist === 'The Beatles' ||
				album.artist === 'Traveling Wilburys' ||
				album.artist === 'Wings'
			) {
				beatlesRecords = [...beatlesRecords, album];
				records = records;
				return false;
			}
			return true;
		});
	}

	async function separateBeatlesRecords() {
		const recordsFromTheBeatles = records.filter((album) => isBeatleRecord(album));
		beatlesRecords = recordsFromTheBeatles;

		const otherRecords = records.filter((album) => !isBeatleRecord(album));
		records = otherRecords;
	}

	function isBeatleRecord(album: Record) {
		if (
			album.artist === 'John Lennon' ||
			album.artist === 'Paul McCartney' ||
			album.artist === 'Paul & Linda McCartney' ||
			album.artist === 'George Harrison' ||
			album.artist === 'Ringo Starr' ||
			album.artist === 'The Beatles' ||
			album.artist === 'Traveling Wilburys' ||
			album.artist === 'Wings'
		) {
			return true;
		}
		return false;
	}

	async function getRecords() {
		records = await fetchRecords();

		if (records.length > 0) {
			// await separateBeatlesRecords();

			await sortRecords();
		}

		const chunkSize = 25;
		let chunkedCollection: Record[][] = [];

		for (let i = 0; i < records.length; i += chunkSize) {
			chunkedCollection.push(records.slice(i, i + chunkSize));
		}
		return chunkedCollection;
	}
</script>

{#await getRecords()}
	<div class="inner-container">
		<p>{recordCollectionStatus}</p>
	</div>
{:then data}
	<!-- <RecordShelf {beatlesRecords} /> -->
	{#each data as shelf, index}
		<div>
			<h2 class="underline">
				Shelf {index + 1} ({shelf[0].artist} to {shelf[shelf.length - 1].artist})
			</h2>
			<RecordShelf data={shelf} />
		</div>
	{/each}
{:catch error}
	<div class="inner-container">
		<b>Something went wrong and the record collection couldn't be retrieved</b>
		<p>{error.message.toString()}</p>
	</div>
{/await}

<style>
	.inner-container {
		text-align: center;
		align-items: center;
		align-content: center;
	}
</style>
