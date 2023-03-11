import { Link } from 'react-router-dom';

function Navbar(){
    return (
    <header id="nav" className='center'>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/voiidpack">voopack</Link>
			<Link to="/photography">Photography</Link>
			<Link to="/music">Music</Link>
		</nav>
		{/* <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw">Tweets by inkvoiid</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
	</header>
    );
}

export default Navbar;