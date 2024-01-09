<script>
	/**
	 * @typedef {Object} ServerInfo
	 * @property {string} name - The name of the server.
	 * @property {string[]} [owner] - The owner of the server.
	 * @property {string} [datecreated] - The date the server was created.
	 * @property {string} [dateended] - The date the server ended.
	 * @property {string} [status] - The status of the server.
	 * @property {string[]} [players] - The list of players on the server.
	 * @property {string} [thumbnail] - A picture of the server.
	 * @property {string} [gallerypath] - The path to the corresponding gallery of images.
	 */

	/** @type {ServerInfo} */
	export let server = {
		name: 'Unknown Server',
		owner: ['Unknown'],
		datecreated: 'Unknown Date',
		dateended: 'Unknown Date',
		status: 'Unknown',
		players: ['Unknown']
	};
</script>

<article class="container mcworldcontainer">
	<section>
		<img
			class="rounded"
			src={server.thumbnail !== undefined
				? '/images/minecraftworlds/' + server.thumbnail
				: 'images/minecraftworlds/no-thumbnail.png'}
			alt={server.name}
		/>
		<!-- <ImageGallery items={images} /> -->
	</section>

	<section style="padding-inline: 2%">
		<h2>{server.name}</h2>
		<p class="subheader">
			{#if server.datecreated !== undefined}
				{server.datecreated} - {server.dateended ?? 'Unknown Date'}
			{:else}
				Unknown Date
			{/if}
		</p>
		<br />
		<div class="left server-info">
			<h3 style="text-align: left">Server Owner</h3>
			<p>
				{#if server.owner !== undefined}
					{#each server.owner as owner}
						<span class="playertag">{owner}</span>
					{/each}
				{:else}
					Unknown
				{/if}
			</p>
			<h3 style="text-align: left">Status</h3>
			<p>
				{#if server.status !== undefined}
					{#if server.status == 'saved'}
						<span class="status" data-status="saved">World file saved</span>
					{:else if server.status == 'lost'}
						<span class="status" data-status="lost">Lost media</span>
					{:else}
						<span class="status">{server.status}</span>
					{/if}
				{:else}
					<span class="status">Unknown</span>
				{/if}
			</p>

			<h3 style="text-align: left">
				Players
				{(server.players !== undefined && ' (' + server.players.length + ')') || ''}
			</h3>
			{#if server.players !== undefined}
				<div style="display: flex; flex-wrap: wrap">
					{#each server.players as player}
						<span class="playertag">{player}</span>
					{/each}
				</div>
			{:else}
				<p style="margin-block: 0">Unknown</p>
			{/if}
		</div>
	</section>
</article>

<style>
	article {
		display: grid;
		gap: 1rem;
		padding-inline: 1rem;
		grid-template-columns: 1fr 1fr;
		align-items: flex-start;
	}

	section {
		height: 100%;
	}

	h3 {
		margin-bottom: -0.3rem;
	}

	p {
		margin-block: 0;
	}

	.server-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	img {
		object-fit: cover;
		height: 100%;
	}

	.playertag {
		background-color: #1b0c1b;
		color: #fff;
		font-size: 1rem;
		text-shadow: 2px 2px #3e3e3e;
		border: 0.3rem solid #2c0863;
		border-radius: 3px;
		margin: 1px;
	}

	.subheader {
		margin-block: 0;
		opacity: 75%;
		font-style: italic;
	}

	.status {
		padding: 2px 4px;
		border-radius: 5px;
		background: gray;
		color: #fff;
	}
	.status::before {
		content: '❔';
	}

	.status[data-status='saved'] {
		background-color: rgb(47, 148, 47);
	}
	.status[data-status='saved']::before {
		content: '✅';
	}

	.status[data-status='lost'] {
		background-color: rgb(208, 70, 70);
	}

	.status[data-status='lost']::before {
		content: '🪦';
	}
</style>
