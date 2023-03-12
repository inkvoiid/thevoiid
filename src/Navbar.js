import { Link } from 'react-router-dom';
import MenuIcon from './media/images/icons/menu.svg';

function Navbar(){
    return (
    <header id="nav" className='center'>
		<nav>
			<a id='navtitle' href="https://inkvoiid.netlify.app">the voiid.</a>
			<p>|</p>
			<Link to="/">Home</Link>
			<Link to="/voiidpack">voopack</Link>
			<Link to="/photography">Photography</Link>
			<Link to="/music">Music</Link>
			<Link to="/about">About Me</Link>
			<a id='hamburger' href='#'><img src={MenuIcon} alt="Menu"/></a>
		</nav>
		{/* <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw">Tweets by inkvoiid</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
	</header>
    );
}

export default Navbar;