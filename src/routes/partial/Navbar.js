import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '../../media/images/icons/menu.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);
	const location = useLocation();
	const projectsActive = location.pathname.includes('/projects/');

	useEffect(() => {
		function handleClickOutside(event) {
		  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setOpen(false);
		  }
		}

		document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [dropdownRef]);

    return (
    <header id="nav">
		<nav>
			<NavLink activeClassName="active" to="/" id='navtitle'>the voiid.</NavLink>
			<p>{" | "}</p>
			<div className="dropdown">
			<button className={projectsActive ? "active" : ""} onClick={() => setOpen(!open)}>Projects <FontAwesomeIcon icon={faCaretDown} /></button>
				{open ? (
					<div ref={dropdownRef} className="dropdown-content">
					<NavLink activeClassName="active" to="../projects/andmyrook" onClick={() => setOpen(!open)}>And My Rook!</NavLink>
					<NavLink activeClassName="active" to="../projects/voiidos" onClick={() => setOpen(!open)}>VoiidOS</NavLink>
					<NavLink activeClassName="active" to="../projects/voiidpack" onClick={() => setOpen(!open)}>VOIIDPack</NavLink>
				</div>
				) : null}
			</div>
			<NavLink activeClassName="active" to="/photography">Photography</NavLink>
			<NavLink activeClassName="active" to="/minecraftworlds">Minecraft Worlds</NavLink>
			<NavLink activeClassName="active" to="/music">Music</NavLink>
			<NavLink activeClassName="active" to="/about">About Me</NavLink>
			<button id='hamburger'><img src={MenuIcon} alt="Menu"/></button>
		</nav>
		{/* <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw">Tweets by inkvoiid</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
	</header>
    );
};

export default Navbar;