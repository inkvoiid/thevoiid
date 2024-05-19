<script lang="ts">
	import '../style.css';

	let hidden = true;

	function toggleNav() {
		hidden = !hidden;
	}
</script>

<a class="skip-to-content__link" href="#main-content">Skip to content</a>
<nav>
	<!-- Home -->
	<a href="/" class="nav-title"> the voiid. </a>

	<!-- Mobile Hamburger -->
	<button class="hamburger" on:click={toggleNav}>
		<img src="" alt="Menu" />
	</button>

	<div class={hidden ? 'nav-links nav-hidden' : 'nav-links'}>
		<span class="splitter"></span>

		<a href="/projects"> Projects </a>
		<a href="/about"> About Me </a>

		<span class="splitter"></span>

		<a href="/photography"> Photography </a>
		<a href="/minecraft-servers"> Minecraft Servers </a>
		<a href="/music"> Music </a>
	</div>
</nav>
<slot />
<footer>
	<p>© inkvoiid 2024</p>
</footer>

<style>
	.skip-to-content__link {
		padding: 0.25rem 0.5rem;
		background-color: var(--brown);
		color: #fff;
		z-index: 1000;
		left: 0.5rem;
		position: absolute;
		transform: translateY(-150%);
		transition: transform 0.3s ease-in;
	}

	.skip-to-content__link:focus {
		transform: translateY(0%);
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
		border: 1px solid rgba(255, 255, 255, 0.096);
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
	nav a:focus,
	nav button:hover,
	nav button:focus {
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

	/* .nav button {
		cursor: pointer;
	} */

	/* .active {
		text-decoration: underline;
		text-decoration-thickness: 0.1rem;
		text-decoration-color: var(--peach);
	} */

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

	@media screen and (max-width: 913px) {
		.hamburger {
			display: block;
			float: right;
		}
		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			background-color: var(--brown);
			backdrop-filter: none;
			box-sizing: border-box;
			margin: 0;
			border-radius: 0%;
			top: 0;
		}

		.nav-links {
			display: flex;
			flex-direction: column;
			position: fixed;
			background-color: #714023ee;
			backdrop-filter: blur(2px);
			width: 100%;
			left: 0;
			top: 2.75rem;
			padding-block: 0.5rem;
			overflow: hidden;
			margin-top: 0;
			height: auto;
			transition: height 0.25s ease-in-out;
		}

		.nav-hidden {
			height: 0;
			padding-top: 0;
			padding-bottom: 0;
		}

		/* .nav-links button,
		.nav-links a {
			display: block;
			width: 90%;
			text-align: left;
			padding: 0.5rem 1rem;
			margin-inline: 1rem;
		} */

		/* .dropdown {
			width: 100%;
		} */

		/* .dropdown-content {
			position: sticky;
			background-color: #4b2a166a;
			width: 100%;
			margin-top: 0.5rem;
			left: 0;
			padding-block: 0.25rem;
		} */

		.splitter {
			display: none;
		}
	}
</style>
