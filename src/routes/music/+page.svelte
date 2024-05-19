<script lang="ts">
	import NowPlaying from './nowplaying.svelte';
	import RecordCollection from './recordcollection.svelte';
</script>

<svelte:head>
	<title>Music - the voiid.</title>
</svelte:head>

<main id="main-content">
	<h1 class="page-title underline">Music</h1>

	<article>
		<!-- Intro -->
		<section class="container left">
			<p>
				Welcome to the Music page! This is where you can check out my <a href="#Record-Collection"
					>Record Collection</a
				>
				or <a href="#Music-Gear">Music Gear</a>. I'm a big fan of The Beatles, Car Seat Headrest,
				Wings, frankie cosmos and Peach Pit.
			</p>
		</section>

		<!-- Now Palying - Last.fm -->
		<section class="container">
			<h1>Now Playing</h1>
			<p>Displaying what I've currently got on the player head for all the world to see.</p>
			<NowPlaying />
		</section>

		<!-- Record Collection -->
		<section id="Record-Collection" class="container inner-container container-green">
			<h1>Record Collection</h1>
			<p>My collection of records, most of which I've "inherited" through my grandad.</p>
			<div class="record-collection-wrapper">
				<RecordCollection />
			</div>
		</section>

		<!-- Music Gear -->
		<section id="Music-Gear" class="container">
			<h1>Music Gear</h1>
			<ul>
				<li>Lefty stratocaster squire</li>
				<li>Oscar Schmidt ukulele</li>
				<li>Artist acoustic guitar</li>
				<li>Cube amp</li>
				<li>Mustang GTX50</li>
				<li>Red loop pedal</li>
			</ul>
		</section>
	</article>
</main>

<style>
	.record-collection-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%; /* Record Shelves spill out otherwise */
	}
</style>
