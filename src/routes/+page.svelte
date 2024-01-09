<main>
	<div class="title">
		<h1 class="title-text">the voiid.</h1>
		<p class="title-subtext">by inkvoiid</p>

		<br />
		<div class="intro">
			<h2 class="hero-greet">
				Hey, I am
				<a
					href="https://www.linkedin.com/in/kaleb-dickson/"
					target="_blank"
					rel="noreferrer"
					class="underline"
				>
					Kaleb Dickson
				</a>
			</h2>
			<p
				style="
				font-style: italic;
				margin-top: 0.5em;
				color: gainsboro;
			"
			>
				I'm a software developer, web developer and guitarist.
			</p>
			<a class="button" href="/about">About Me</a>
		</div>
	</div>

	<article class="container">
		<h1>Welcome</h1>
		<p>
			Welcome to my small corner of the internet. This is where I conglomerate everything I work on
			so I can display it in one place.
		</p>
		<p>
			<b>Note:</b> This site isn't intended to be purely professional. Random things ensue.
		</p>
	</article>
	<article class="container outer-container container-green">
		<h1>Featured Projects</h1>
		<section class="inner-container">
			<p>
				You can find my projects <a href="/projects">here</a> on this site, such as my Resource Pack
				<a href="/projects/voiidpack">VOIIDPack</a>
				and my Chess-like game
				<a href="/projects/and-my-rook">And My Rook!</a>
			</p>
			<div class="projects-grid">
				<!-- <ProjectPreview
					url={'/projects/andmyrook'}
					image={AndMyRookPreview}
					title={'And My Rook!'}
					description={'My Chess-like game about leveling up your Chess pieces.'}
				/>

				<ProjectPreview
					url={'/'}
					image={ClientServerPreview}
					title={'⚠️Client Server Web Development Site'}
					description={'A site that explores single page apps and javascript frameworks.'}
				/>

				<ProjectPreview
					url={'/'}
					image={LegoIndyPuzzlePreview}
					title={'⚠️LEGO Indy Puzzle'}
					description={'A recreation of the LEGO Indiana Jones Hieroglyphics puzzle.'}
				/>

				<ProjectPreview
					url={'/'}
					image={MCPetListPreview}
					title={'⚠️MCPetList'}
					description={'A program to categorise your Minecraft pets.'}
				/>

				<ProjectPreview
					url={'/'}
					image={MOEBILEPreview}
					title={'⚠️MOEBILE'}
					description={"A mock phone app for Moe's Bar."}
				/>

				<ProjectPreview
					url={'/'}
					image={OurKitchenPreview}
					title={'⚠️Our Kitchen'}
					description={'A web app to upload and view family recipes.'}
				/>

				<ProjectPreview
					url={'/'}
					image={StarWarsPreview}
					title={'⚠️Star Wars Movie Site'}
					description={'A dynamic site that displays info about the Star Wars movies.'}
				/>

				<ProjectPreview
					url={'/projects/voiidos'}
					image={VoiidOSPreview}
					title={'VoiidOS'}
					description={'My CLI style "OS".'}
				/>

				<ProjectPreview
					url={'/projects/voiidpack'}
					image={VOIIDPackPreview}
					title={'VOIIDPack'}
					description={'My Minecraft Resource Pack'}
				/> -->
			</div>
		</section>
	</article>

	<article class="container">
		<h1>How this site was made.</h1>
		<p>You wouldn't be seeing this site if it weren't for these technologies:</p>
		<div class="left">
			<h3>SvelteKit</h3>
			<p>
				It's a Javascript framework which allows me to split areas of my site in modules, make the
				navigation seem instantanious and import Node.js packages for me to utilise on this site.
			</p>

			<h3>GitHub</h3>
			<p>
				It allows me to push my code to an online repository, where all the changes are staged, the
				code can be viewed by people, the repo can be forked by someone and if I ever wanted to, I
				could let multiple people push to it.
			</p>

			<h3>Netlify</h3>
			<p>
				It's a such a great site for deploying sites. I've been using it since around 2017 when it
				was called BitBalloon and I would zip up my HTML site and upload it on there to deploy new
				changes. Nowadays, I have deploys linked to a GitHub repo, so any time it gets a new push,
				Netlify builds the latest update.
			</p>
		</div>
	</article>
</main>

<style>
	.title {
		color: #fff;
		text-align: center;
		padding: 0;
		line-height: 1;
	}

	.title-text {
		text-align: right;
		font-size: min(10rem, 17.5vw);
		color: #fff;
		margin: 0 auto;
		margin-bottom: -1.5rem;
		font-weight: 700;
	}

	.title-subtext {
		margin-top: 0;
		margin-right: min(2.5rem, 5vw);
		text-align: right;
		font-size: min(2rem, 4vw);
		opacity: 75%;
		z-index: 1;
	}

	.intro {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-greet a {
		color: #fff;
	}

	.projects-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	}

	.projects-grid div {
		height: 100%;
	}

	/* Project Preview */

	.project-preview div {
		height: auto;
		overflow: hidden;
		border-radius: 5px;
		box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.1);
	}

	.project-preview h2 {
		color: var(--text-color);
		font-size: 1.3rem;
		margin: 0;
		padding: 0.25rem;
	}

	.project-preview p {
		color: var(--text-color);
		font-size: 1rem;
		opacity: 75%;
		margin: 0;
		padding: 0;
	}

	.project-preview:hover .project-preview p {
		text-decoration: none;
	}

	.project-preview div img {
		aspect-ratio: 16/10;
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
		transition: transform 0.25s ease-in-out;
	}

	.project-preview:hover div img {
		transform: scale(1.05);
		transform-origin: center;
	}

	.project-preview:hover * h2 {
		text-decoration: none;
	}

	.project-preview:hover {
		text-decoration: none;
		background-color: red;
	}

	@media screen and (max-width: 600px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
