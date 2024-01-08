<script>
	import Polaroid from './polaroid.svelte';
</script>

<main>
	<h1 class="page-title underline">Photography</h1>
	<article>
		<section class="photography-intro container">
			<div>
				<img
					class="rounded"
					src="images/camera.jpg"
					alt="My father's Canon EOS550D"
					style="width: 100%; height: auto;"
				/>
			</div>
			<div class="page-description">
				<p>
					I garnered a passion in photography when I opted to take it as a subject in high school in
					2019. Most, if not all of these photos have been taken on my father's Canon EOS550D.
				</p>
				<p>
					The photography classes taught me all about aperture, shutter speed, leading lines and the
					rule of thirds. You may be able to tell I like to do some digital manipulation.
				</p>
				<p>
					Take a look at
					<a href="#Gallery">some snaps I've done in my lifetime</a>, some
					<a href="#Baking">photos of my baking</a>, or
					<a href="#Japan">my dad's photos from Japan</a>.
				</p>
			</div>
		</section>

		<section id="Gallery" class="container">
			<h1>Gallery</h1>
			<p>
				These are some of my favourite photos I've taken, and here I am sharing them with you.
				Aren't you lucky.
			</p>
		</section>

		<section class="gallery">
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
		</section>

		<section id="Baking" class="container">
			<h1>Baking Photos</h1>
			<p>I've always liked baking more than cooking, and these are some of the things I've made.</p>
			<p>Most of these are shot on my phone.</p>
		</section>
		<section class="gallery">
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
		</section>

		<section id="Japan" class="container">
			<h1>Dad's Japan Trip</h1>
			<p>These are some photos my dad took while he was in Japan in 2022.</p>
			<p>
				There are pictures of temples, cityscapes, stores and the Radio Kaikan building in
				Akihabara, Tokyo.
			</p>
		</section>
		<section class="gallery">
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
			<Polaroid src="images/gallery/airw.jpg" name="Cool one" />
		</section>
	</article>
</main>

<style>
	@font-face {
		font-family: 'Milku';
		src: url('/fonts/Milku.otf');
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		gap: 2rem;
	}

	.photography-intro {
		display: grid;
		gap: 1rem;
		padding-inline: 1rem;
		grid-template-columns: 1fr 2fr;
		align-items: flex-start;
	}

	.page-description {
		display: flex;
		flex-direction: column;
		text-align: left;
	}
	.page-description p {
		max-inline-size: 80ch;
	}

	@media screen and (max-width: 600px) {
		.photography-intro {
			grid-template-columns: 1fr;
		}

		.gallery {
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
	}
</style>
