<script context="module" lang="ts">
	import { onMount } from 'svelte';

	export type Record = {
		id: any;
		title: any;
		artist: any;
		year: any;
		image: any;
	};
</script>

<script lang="ts">
	const LASTFM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

	export let data: Record[];
</script>

<div class="record-collection">
	{#each data as album (album.id)}
		<div class="record" style="background-image: url({album.image})">
			<div class="record-info">
				<h2 class="title">
					<a href="/">{album.title}</a>
				</h2>
				<p class="artist year">
					{album.artist}
					{#if album.year !== 0}
						({album.year})
					{/if}
				</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.record-collection {
		display: flex;
		/* flex-wrap: wrap; */
		overflow: hidden;
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none;
		padding: 1rem 1rem 0 1rem;
		margin-inline: 3rem;
		background-color: #00000037;
		border-bottom: var(--brown);
		border-bottom-style: solid;
		border-bottom-width: 1rem;
	}

	.record-collection::-webkit-scrollbar {
		display: none;
		scrollbar-width: none;
	}

	.record {
		display: flex;
		flex-direction: column;
		aspect-ratio: 1/1;
		width: 150px;
		background-repeat: no-repeat;
		background-size: cover;
		min-width: 150px;
		position: relative;
		box-shadow: -5px 0 10px #00000098;
		overflow: hidden;
	}

	.record .title {
		font-size: 1.1rem;
		color: white;
	}

	.record .title a {
		text-wrap: balance;
		background: transparent;
		color: white;
	}

	.record .title a:hover {
		background-color: transparent;
		text-decoration: underline 2px var(--peach);
	}

	.record .artist,
	.record .year {
		color: gainsboro;
		font-size: 0.9rem;
	}

	.record-info {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 0.5rem;

		background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.75));
	}

	.record:focus-within .record-info {
		transition-duration: 0ms;
	}

	.record:hover .record-info,
	.record:focus-within .record-info {
		transform: translateY(0%);
	}

	.record:hover .record-info > *,
	.record:focus-within .record-info > * {
		opacity: 1;
	}
	.record p,
	.record .title {
		margin: 0;
		padding: 0;
	}

	@media (hover) {
		.record {
			width: 13em;
			box-shadow: -5px 0 7.5px #00000068;
			--record-gap: 10em;
			transition: 0.25s ease-in-out;
		}
		.record:hover {
			transform: translateY(-0.15rem);
			rotate: 1.5deg;
		}

		.record:hover ~ .record {
			transform: translateX(var(--record-gap));
		}

		.record:not(:first-child) {
			margin-left: calc(var(--record-gap) * -1);
		}

		.record-info {
			transform: translateY(100%);
			transition: transform 0.25s ease-in-out;
		}

		.record-info > * {
			opacity: 0;
			transition: opacity 0.4s linear;
		}
	}

	@media screen and (max-width: 1000px) {
		.record-collection {
			margin-inline: -1rem;
			padding: 1rem 1rem 0 1rem;
			gap: 1rem;
			overflow: scroll;
		}

		.record {
			min-width: 150px;
		}
	}
</style>
