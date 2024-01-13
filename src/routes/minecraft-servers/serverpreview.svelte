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
	 * @property {string} [downloadlink] - A download link for the server.
	 * @property {string} [downloadsize] - The size of the download.
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

	/** @param {string} string */
	const kebabCase = (string) =>
		string
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.replace(/[\s_]+/g, '-')
			.replace(/'/g, '')
			.toLowerCase();
</script>

<article id={kebabCase(server.name)} class="container server-preview">
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

	<section class="server-text">
		<h2><a href={'#' + kebabCase(server.name)}>#</a>{server.name}</h2>
		<p class="subheader">
			{#if server.datecreated !== undefined}
				{server.datecreated} - {server.dateended ?? 'Unknown Date'}
			{:else}
				Unknown Date
			{/if}
		</p>
		<br />
		<!-- Server Owner -->
		<div class="left server-info">
			<h3 style="text-align: left">Server Owner</h3>
			<p>
				{#if server.owner !== undefined}
					{#each server.owner as owner}
						<span class="playertag">{owner}</span>
					{/each}
				{:else}
					<i>Unknown</i>
				{/if}
			</p>
			<!-- Status -->
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

			<p>
				{#if server.downloadlink !== undefined}
					{#if server.downloadsize !== undefined}
						<a href={server.downloadlink} target="_blank" rel="noreferrer"
							>Download World File [{server.downloadsize}]</a
						>
					{:else}
						<a href={server.downloadlink} target="_blank" rel="noreferrer">Download World File</a>
					{/if}
				{:else if server.status === 'saved'}
					<p>⚠️ World File Unavailable</p>
				{/if}
			</p>
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

	h2 a {
		position: absolute;
		right: 1rem;
		opacity: 0%;
		background: none;
		transition: opacity 0.25s;
	}

	article:hover h2 a {
		opacity: 75%;
	}

	h3 {
		margin-bottom: -0.3rem;
	}

	p {
		margin: 0;
	}

	.server-text {
		padding-inline: 2%;
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

	@media screen and (max-width: 768px) {
		.server-preview {
			grid-template-columns: 1fr;
		}

		.server-text {
			padding-inline: 0;
		}

		h2 a {
			display: none;
		}

		p {
			margin: 0;
		}
	}
</style>
