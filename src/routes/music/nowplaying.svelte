<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	const LASTFM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

	type Track = {
		name: string;
		artist: any;
		album: any;
		date: any;
		url: string;
		image: any;
		'@attr': any;
	};

	type LastFMResponse = {
		recenttracks: {
			track: Track[];
		};
	};

	export async function fetchTracks(): Promise<LastFMResponse> {
		if (LASTFM_API_KEY === undefined) {
			throw error(401, 'No LastFM API Key');
		}
		let res = await fetch(
			`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=inkvoiid&api_key=${LASTFM_API_KEY}&format=json&limit=5`
		);
		let data: LastFMResponse = await res.json();
		if (data.recenttracks !== undefined) {
			console.log(data);
			// If there is a track currently playing, the api fetches 6 tracks, so trim it to match the loading skeleton
			data.recenttracks.track = data.recenttracks.track.slice(0, 5);
		}
		return data;
	}

	let lastplayed: LastFMResponse | undefined;

	onMount(async () => {
		lastplayed = await fetchTracks();
	});
</script>

<div style="width:100%">
	{#await lastplayed}
		<!-- Dummy data from a hardcoded array while loading -->
		<div transition:fade={{ duration: 100 }}>
			{#each Array(5) as _}
				<div class="track">
					<div class="track-images">
						<!-- Cover Image -->
						<img src="/images/nocover.png" width="64px" alt="Loading Track" class="track-cover" />
					</div>

					<!-- Track Info -->
					<div class="track-info">
						<p class="track-name">Loading Track</p>

						<span class="track-play-date">Loading Track</span>
					</div>
				</div>
			{/each}
		</div>
	{:then data}
		{#key data}
			<div transition:fade={{ duration: 300 }}>
				{#each Array.from(data?.recenttracks?.track || []) as track (track.name)}
					<!-- Add the "now-playing" class to the track that is currently playing -->
					<div
						class={track['@attr'] && track['@attr'].nowplaying === 'true'
							? 'now-playing track'
							: 'track'}
					>
						<div class="track-images">
							<!-- Cover Image -->
							<img
								src={track.image[1]['#text']}
								width="64px"
								alt={track.album['#text'] + ' album cover'}
								class="track-cover"
							/>

							<!-- Spinning Record -->
							{#if track['@attr'] && track['@attr'].nowplaying === 'true'}
								<img class="spinning-record" src="images/record.png" alt="" />
							{/if}
						</div>

						<!-- Track Info -->
						<div class="track-info">
							<a href={track.url} target="_blank" rel="noreferrer" class="track-name"
								>{track.name} - {track.artist['#text']}</a
							>

							{#if track['@attr'] && track['@attr'].nowplaying === 'true'}
								<span class="track-play-date">Now Playing</span>
							{:else}
								<i class="track-play-date">Played {track.date['#text']}</i>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/key}
	{:catch error}
		<p>Can't reach LastFM.</p>
	{/await}
</div>

<style>
	.track {
		display: grid;
		grid-template-columns: auto 1fr;
		text-align: left;
		border-radius: 0.5rem;
		margin: 0.5rem;
		box-shadow: 5px 5px 10px #00000025;

		background-color: #0000;
	}

	.track-images {
		display: flex;
		aspect-ratio: 1/1;
	}

	.track-cover {
		position: relative;
		margin: 0.5rem;
		display: block;
		box-shadow: 2px 2px 5px #00000025;
		/* border-radius: 0.3rem; */
		z-index: 2;
	}

	.spinning-record {
		position: relative;
		z-index: 1;
		top: 8px;
		left: -58px;
		margin-right: -64px;
		width: 64px;
		height: 64px;
	}

	.track:nth-child(even) {
		background-color: #fff;
	}

	.now-playing {
		background-color: var(--brown);
		color: #fff;
	}

	.now-playing .track-info {
		padding-inline: 1rem;
	}

	.now-playing a {
		color: #fff;
	}

	.track-info {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		padding-inline: 0.25rem;
	}

	.track-play-date {
		opacity: 75%;
		font-size: 1rem;
	}

	.track-name {
		font-weight: 500;
		margin: 0;
		background: none;
	}

	.track-name:hover {
		text-decoration: underline;
		text-decoration-thickness: 2px;
	}

	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.spinning-record {
			-webkit-animation: spin 4s linear infinite;
			-moz-animation: spin 4s linear infinite;
			animation: spin 4s linear infinite;

			-webkit-animation-play-state: running;
			-moz-animation-play-state: running;
			animation-play-state: running;
		}
	}
</style>
