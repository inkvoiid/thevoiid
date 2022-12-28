function Navbar(){
    return (
    <header id="nav">
		<nav className="m-3">
			<a href="https://inkvoiid.netlify.app"><img src="media/thevoiid.png" alt="the voiid." /></a>
			<ul>
			  	<li><a id="currentPage" href="/">&gt;Home</a></li>
			  	<li><a href="/voiidpack">&gt;voopack</a></li>
			  	<li><a href="/photography">&gt;Photography</a></li>
			</ul>
		</nav>
	</header>
    );
}

export default Navbar;