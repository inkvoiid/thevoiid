<script lang="ts">
	import * as packReleases from '$lib/data/voiidpack-releases.json';
</script>

<svelte:head>
	<title>VOIIDPack - the voiid.</title>
</svelte:head>

<main id="main-content">
	<h1 class="page-title underline">VOIIDPack</h1>
	<div class="container">
		<h2>About VOIIDPack</h2>
		<p>
			VOIIDPack is a Minecraft resource pack began development when I was 15. It's has a 16x
			resolution but the general look is softer than vanilla Minecraft.
		</p>
		<p>
			It's current state is a half finished pack with parts that I would like to rework some day.
		</p>
	</div>

	<div class="container">
		<h2>VOIIDPack Releases</h2>
		<table>
			<tr>
				<th>VOIIDPack Version</th>
				<th>Minecraft Version</th>
				<th>Release Date</th>
				<th>Download Link</th>
			</tr>
			{#each packReleases.data as data}
				<tr>
					<td>{data.version}</td>
					<td>Minecraft {data.mcversion}</td>
					<td>{data.releasedate}</td>
					{#if data.url === ''}
						<td>Unavailable</td>
					{:else}
						<td>
							<a href={data.url} target="_blank" rel="noreferrer">
								<i class="fas fa-download"></i> Download
							</a>
						</td>
					{/if}
				</tr>
			{/each}
		</table>
	</div>
</main>
