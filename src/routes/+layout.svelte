<nav>
	<!-- Home -->
	<a href="/" class="nav-title"> the voiid. </a>

	<!-- Mobile Hamburger -->
	<button class="hamburger">
		<img src="" alt="Menu" />
	</button>

	<div class="nav-links">
		<span class="splitter"></span>

		<a href="/projects"> Projects </a>
		<a href="/about"> About Me </a>

		<span class="splitter"></span>

		<a href="/photography"> Photography </a>
		<a href="/minecraft-worlds"> Minecraft Worlds </a>
		<a href="/music"> Music </a>
	</div>
</nav>
<slot />
<footer>
	<p>© inkvoiid 2024</p>
</footer>

<style>
	@font-face {
		font-family: 'DM Sans';
		src:
			local('DM Sans'),
			url(/fonts/DMSans.ttf) format('truetype');
	}

	@font-face {
		font-family: 'DM Sans';
		src:
			local('DM Sans'),
			url(/fonts/DMSans-Italic.ttf) format('truetype');
		font-style: italic;
	}

	@font-face {
		font-family: 'LTCushion';
		src:
			local('LTCushion'),
			url('/fonts/LTCushion-VF.ttf') format('truetype');
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		font: inherit;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:root {
		--background-colour: #272727;
		--brown: #8d512e;
		--beige: #eae2da;
		--darkgreen: #1b464c;
		--peach: #ecb1a0;
		--paleforestgreen: #6f8583;
		--offwhite: #fffff2;
		--text-color: #000;

		--transparentbrown: #8d512ec8;
	}

	:global(html) {
		hanging-punctuation: first last;
		scroll-padding-top: 5rem;
	}

	:global(body) {
		margin: 0;
		font-family:
			'DM Sans',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI Variable Display',
			'Segoe UI',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'Fira Sans',
			'Droid Sans',
			'Helvetica Neue',
			sans-serif;
		font-size: 17px;
		font-weight: 400;
		background-image: url(/images/sky.jpg);
		background-color: var(--background-colour);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		background-position-y: 5%;
		color: var(--text-color);
	}

	:global(main) {
		margin: 2rem 12.5%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-bottom: 2rem;
	}

	:global(article) {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	:global(img, picture, svg, video) {
		display: block;
		max-width: 100%;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		text-wrap: balance;
		font-weight: 700;
	}

	:global(h1) {
		font-family: 'LTCushion', 'DM Serif Text', serif;
		color: var(--peach);
		font-size: min(3rem, 12.5vw);
		font-weight: 800;
	}

	:global(h2) {
		font-size: min(1.5rem, 7vw);
	}

	:global(p) {
		margin: 0.25rem;
		text-wrap: pretty;
		max-inline-size: 75ch;
		word-wrap: break-word;
	}

	:global(.page-title) {
		font-size: min(3.5rem, 12.5vw);
		text-align: center;
		color: #fff;
		margin-top: 0rem;
	}

	:global(.underline) {
		text-decoration: underline;
		text-decoration-skip-ink: none;
		text-underline-offset: -3px;
		text-decoration-thickness: 10px;
		text-decoration-color: var(--brown);
	}

	:global(.container) {
		text-align: center;
		margin: 0;
		padding: 0.5rem 5rem;
		padding-block: 1rem;
		border-radius: 0.5rem;
		background-color: #fff;
		box-shadow: 0.25rem 0.25rem 3rem 0 rgba(0, 0, 0, 0.35);
		display: flex;
		flex-direction: column;
		gap: 0;
		align-items: center;
	}

	:global(.container h1) {
		margin: 0 auto;
		font-size: 2.25rem;
		text-decoration-line: underline;
		text-decoration-thickness: 0.15rem;
	}

	:global(a) {
		color: var(--text-color);
	}

	:global(.tabTitle) {
		margin: 0;
		padding: 0;
		color: #56c7c9;
	}

	:global(.center) {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	:global(.rounded) {
		border-radius: 0.3rem;
	}

	:global(.no-m) {
		margin: 0;
	}

	:global(.no-p) {
		padding: 0;
	}

	:global(.flex-container) {
		padding-block: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	:global(.outer-container) {
		padding: 1rem 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	:global(.inner-container) {
		text-align: center;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: #fff;
		box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.35);
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	:global(.left p) {
		text-align: left;
	}

	/* Pink highlighter link */
	:global(.container a:not(.button)) {
		color: var(--background-colour);
		text-decoration: none;
		font-weight: 600;
		padding-inline: 2px;
		line-height: 1.5rem;
		background-image: linear-gradient(transparent 50%, #ff987c7a 50%);
		background-size: auto 175%;
		transition: background 0.3s ease-in-out;
	}

	/* Pink highlighter link (hovered) */
	:global(.container a:hover:not(.button)) {
		background-position-y: 100%;
	}

	:global(.button) {
		background-color: #e6bdbd32;
		padding: 1rem;
		border-radius: 10px;
		margin: 1rem;
		display: inline-block;
		text-decoration: none !important;
		color: white !important;
		font-weight: 700;
		font-size: 1.25rem;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}

	:global(table) {
		display: inline;
	}

	:global(td, th) {
		border: 1px solid #00000011;
		text-align: center;
		padding: 8px;
	}

	:global(tr:nth-child(even)) {
		background-color: #00000011;
	}

	:global(.titleLinkList) {
		list-style: none;
		display: flex;
		justify-content: center;
		text-align: center;
	}

	:global(.titleLinkList a) {
		margin-inline: 0.15rem;
		border-radius: 0;
	}

	:global(.titleLinkList a:first-child) {
		border-radius: 10px 0 0 10px;
	}

	:global(.titleLinkList a:last-child) {
		border-radius: 0 10px 10px 0;
	}

	:global(img) {
		vertical-align: middle;
		height: auto;
		max-width: 100%;
		font-style: italic;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	:global(.container-green) {
		background: var(--paleforestgreen);
	}

	:global(.container-blue) {
		background: #82a6b1;
	}

	:global(.container-brown) {
		background: var(--brown);
	}

	:global(.container-beige) {
		background: var(--beige);
	}

	:global(.container-green h1, .container-green h2, .container-brown h1, .container-brown h2) {
		color: var(--offwhite);
	}

	:global(.container-beige h1, .container-beige h2) {
		color: var(--brown);
	}

	:global(.container-green > p, .container-blue > p, .container-brown > p) {
		color: #fff;
	}

	@media (hover) {
		:global(.button) {
			transition: background-color 0.25s ease-in-out;
		}

		:global(.button:hover) {
			background-color: #e7c1c161;
		}

		:global(.container .button:hover) {
			background-color: var(--transparentbrown);
		}
	}

	:global(.container .button) {
		background-color: var(--brown);
	}

	:global(.container-green) {
		background: var(--paleforestgreen);
	}

	:global(.container-blue) {
		background: #82a6b1;
	}

	:global(.container-brown) {
		background: var(--brown);
	}

	:global(.container-beige) {
		background: var(--beige);
	}

	:global(.container-green h1, .container-green h2, .container-brown h1, .container-brown h2) {
		color: var(--offwhite);
	}

	:global(.container-beige h1, .container-beige h2) {
		color: var(--brown);
	}

	:global(.container-green > p, .container-blue > p, .container-brown > p) {
		color: #fff;
	}

	/* Footer */

	footer {
		display: flex;
		flex-direction: column;
		bottom: 0;
		width: 100%;
		text-align: center;
		align-items: center;
		margin-top: 1rem;
		padding: 0.5rem 0;
		background-color: #181818;
		color: var(--offwhite);
	}

	nav {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background-color: #8d512eee;
		backdrop-filter: blur(2px);
		color: var(--peach);
		position: sticky;
		top: 0.5rem;
		border-radius: 1.75rem;
		padding: 0.5rem;
		box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.25);
		margin: 0.5rem 11.5%;
		z-index: 100;
	}

	.nav-title {
		font-family: 'LTCushion', serif;
		font-weight: 600;
		font-size: min(1.3rem);
		padding-bottom: 0.25rem;
	}

	nav a,
	nav button {
		background-color: transparent;
		border: none;
		color: #fff;
		font-size: min(1.1rem, 5vw);
		text-decoration: none;
		padding: 0.35rem 0.5rem;
		font-weight: 500;
		border-radius: 0.75rem;
		transition:
			border-radius 0.25s ease-in-out,
			background-color 0.25s ease-in-out,
			color 0.25s ease-in-out,
			text-decoration 0.25s ease-in-out;
	}

	nav a:hover,
	nav button:hover {
		border-radius: 1.75rem;
		background-color: white;
		color: var(--brown);
		text-decoration-color: var(--brown);
	}

	.nav-links {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	.nav button {
		cursor: pointer;
	}

	.active {
		text-decoration: underline;
		text-decoration-thickness: 0.1rem;
		text-decoration-color: var(--peach);
	}

	.splitter {
		margin-block: 0.1rem;
		border-left: solid 2px #fac5af23;
	}

	.hamburger {
		display: none;
		margin-top: -3px;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		:global(body) {
			font-size: min(1rem, 5vw);
		}

		:global(main) {
			margin: 2rem 4vw;
		}

		:global(.container) {
			padding: 1rem 5vw;
		}

		:global(.container h1) {
			font-size: min(2rem, 10vw);
		}

		:global(.outer-container) {
			padding: 1rem 2vw;
		}

		:global(.inner-container) {
			padding: 1rem;
		}

		.hamburger {
			display: block;
			float: right;
		}
		nav {
			width: 100%;
			background-color: var(--brown);
			backdrop-filter: none;
			box-sizing: border-box;
			display: block;
			margin: 0;
			border-radius: 0%;
			top: 0;
			display: flex;
			flex-direction: row;
		}

		.nav-links {
			display: flex;
			flex-direction: column;
			position: fixed;
			background-color: #714023ee;
			backdrop-filter: blur(2px);
			width: 100%;
			left: 0;
			top: 3.33rem;
			padding-block: 0.5rem;
			overflow: hidden;
			margin-top: 0;
			height: auto;
			transition: height 0.25s ease-in-out;
		}

		.hiddenNav {
			height: 0;
			padding-top: 0;
			padding-bottom: 0;
		}

		.nav-links button,
		.nav-links a {
			display: block;
			width: 90%;
			text-align: left;
			padding: 0.5rem 1rem;
			margin-inline: 1rem;
		}

		.dropdown {
			width: 100%;
		}

		.dropdown-content {
			position: sticky;
			background-color: #4b2a166a;
			width: 100%;
			margin-top: 0.5rem;
			left: 0;
			padding-block: 0.25rem;
		}

		.splitter {
			display: none;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		:global(:has(:target)) {
			scroll-behavior: smooth;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(*, *::before, *::after) {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
			transition-delay: 0ms !important;
		}
	}
</style>
