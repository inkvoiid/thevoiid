import { Link } from 'react-router-dom';
import Logo from './media/images/thevoiid.png';

function Navbar(){
    return (
    <header id="nav" className='center'>
		<nav>
			<Link to="/">&gt;Home</Link>
			<Link to="/voiidpack">&gt;voopack</Link>
			<Link to="/photography">&gt;Photography</Link>
			<Link to="/music">&gt;Music</Link>
		</nav>
		{/* <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw">Tweets by inkvoiid</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
	</header>
    );
}

export default Navbar;