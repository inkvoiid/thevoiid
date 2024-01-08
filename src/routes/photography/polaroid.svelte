<script>
	/** @type {string} */
	export let src;
	/** @type {string} */
	export let name;
</script>

<div class="polaroid">
	<img {src} width={1000} height={1000} alt={src} />
	<p>{name}</p>
</div>

<style>
	.polaroid {
		background-color: whitesmoke;
		background-image: url('images/stripe.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		text-align: center;
		aspect-ratio: 8 / 10;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
		padding: 1.3rem 1rem;
	}

	.polaroid img {
		width: 100%;
		height: 75%;
		object-fit: cover;
	}
	.polaroid p {
		font-family: 'Milku';
		font-size: 2rem;
		margin-inline: auto;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 600;
		margin-top: 5%;
	}

	@media screen and (max-width: 600px) {
		.polaroid p {
			margin-top: 1%;
			font-size: smaller;
		}
	}
</style>
