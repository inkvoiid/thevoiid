<script>
	import * as serverData from '$lib/data/minecraft-servers.json';
	import ServerPreview from './serverpreview.svelte';

	console.log(serverData);
</script>

<div id="mc-servers" class="section-nav">
	<p>Quick Jump</p>
	{#each serverData.servers as servers}
		<a href="#{servers.year}" class="year-{servers.year}">{servers.year}</a>
	{/each}
</div>
<main>
	<h1 class="page-title underline">Minecraft Worlds</h1>

	<section class="container">
		<p>
			View some of the Minecraft server worlds I've catalogued. Who knows? Perhaps you might have
			taken part in some of them.
		</p>
		<p>
			While you're here, you may be interested in my resource pack, <a href="/projects/voiidpack"
				>VOIIDPack</a
			>.
		</p>
	</section>
	<div
		data-bs-spy="scroll"
		data-bs-target="#mc-servers"
		data-bs-offset="0"
		class="scrollspy-example"
		data-bs-smooth-scroll="true"
	>
		{#each serverData.servers as servers (servers.year)}
			<div id={servers.year.toString()} class="server-group">
				<h1 class="year-heading year-{servers.year} underline">{servers.year}</h1>
				{#each servers.entries as server (server.name)}
					<ServerPreview {server} />
				{/each}
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		position: relative;
	}
	.section-nav {
		background-color: #fff;
		padding: 0.25rem;
		padding-bottom: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 0.25rem 0.25rem 1.5rem 0 rgba(0, 0, 0, 0.35);
		position: fixed;
		margin-top: 2rem;
		margin-inline: 3%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--brown);
	}

	.section-nav a {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--brown);
		text-decoration-color: var(--year-colour);
		text-decoration-thickness: 3px;
		text-decoration-skip-ink: none;
		padding: 0.25rem 0.35rem;
		border-radius: 0.25rem;
		transition: all 0.15s ease-in-out;
	}

	.section-nav a:hover {
		background-color: var(--year-colour);
		color: #fff;
		text-decoration-color: #fff;
		text-decoration-thickness: 2px;
		border-radius: 0.6rem;
	}

	.year-heading {
		text-align: center;
		color: #fff;
		margin-top: 1rem;
		text-decoration-color: var(--year-colour);
	}

	.year-2017 {
		--year-colour: rgb(70, 130, 180);
	}
	.year-2018 {
		--year-colour: rgb(164, 65, 16);
	}
	.year-2019 {
		--year-colour: rgb(85, 161, 70);
	}
	.year-2020 {
		--year-colour: rgb(230, 184, 34);
	}
	.year-2021 {
		--year-colour: rgb(41, 120, 230);
	}
	.year-2022 {
		--year-colour: rgb(217, 80, 56);
	}
	.year-2023 {
		--year-colour: rgb(27, 122, 45);
	}

	.server-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
