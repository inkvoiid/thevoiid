import { Link } from 'react-router-dom';
import MenuIcon from '../../media/images/icons/menu.svg';

function Navbar(){
    return (
    <header id="nav" className='center'>
		<nav>
			<Link to="/" id='navtitle'>the voiid.</Link>
			<p>|</p>
			<Link to="/voiidpack">VOIIDPack</Link>
			<Link to="/photography">Photography</Link>
			<Link to="/minecraftworlds">Minecraft Worlds</Link>
			<Link to="/music">Music</Link>
			<Link to="/voiidos">VOIIDOS</Link>
			<Link to="/about">About Me</Link>
			<button id='hamburger'><img src={MenuIcon} alt="Menu"/></button>
		</nav>
		{/* <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw">Tweets by inkvoiid</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
	</header>
    );
}

export default Navbar;