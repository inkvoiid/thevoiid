import Logo from './media/images/thevoiid.png';

function Navbar(){
    return (
    <header id="nav">
		<nav className="m-3">
			<a href="https://inkvoiid.netlify.app"><img src={Logo} alt="the voiid." /></a>
			<ul>
			  	<li><a id="currentPage" href="/">&gt;Home</a></li>
			  	<li><a href="/voiidpack">&gt;voopack</a></li>
			  	<li><a href="/photography">&gt;Photography</a></li>
			  	<li><a href="/music">&gt;Music</a></li>
			</ul>
		</nav>
		<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw">Tweets by inkvoiid</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
	</header>
    );
}

export default Navbar;