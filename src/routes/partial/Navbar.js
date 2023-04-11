import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '../../media/images/icons/menu.svg';
import "../../css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
	const [open, setOpen] = useState(false);
	const [isMobileNavExpanded, setMobileNavExpanded] = useState(false);
	const dropdownRef = useRef(null);
	const location = useLocation();
	const projectsActive = location.pathname.includes('/projects/');
	
	useEffect(() => {
		function handleClickOutside(event) {
		  if(document.getElementById("hamburger").style.display === "none"){
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setOpen(false);
			  }
			}
			else
			{
				if (dropdownRef.current && !dropdownRef.current === (event.target)) {
					setOpen(false);
				  }
			}
		}

		document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [dropdownRef]);

  function closeDropdownAndTryCloseMobileNav() {
	setOpen(false);
	if(document.getElementById("hamburger").style.display !== "none"){
		setMobileNavExpanded(false);
	}
}

    return (
    <header id="nav">
		<nav>
			<NavLink activeClassName="active" to="/" id='navtitle' onClick={() => setMobileNavExpanded(false)}>the voiid.</NavLink>
			<p id='splitter'>{" | "}</p>
			<button id='hamburger' onClick={() => setMobileNavExpanded(!isMobileNavExpanded)}><img src={MenuIcon} alt="Menu"/></button>
			<div id="navlinks" style={{display: isMobileNavExpanded ? "inline" : "none"}}>
				<div className="dropdown">
				<button className={projectsActive ? "active" : ""} onClick={() => setOpen(!open)}>Projects <FontAwesomeIcon icon={faCaretDown} /></button>
					{open ? (
						<div ref={dropdownRef} className="dropdown-content">
						<NavLink activeClassName="active" to="../projects/andmyrook" onClick={() => closeDropdownAndTryCloseMobileNav()}>And My Rook!</NavLink>
						<NavLink activeClassName="active" to="../projects/voiidos" onClick={() => closeDropdownAndTryCloseMobileNav()}>VoiidOS</NavLink>
						<NavLink activeClassName="active" to="../projects/voiidpack" onClick={() => closeDropdownAndTryCloseMobileNav()}>VOIIDPack</NavLink>
					</div>
					) : null}
				</div>
				<NavLink activeClassName="active" to="/photography" onClick={() => setMobileNavExpanded(false)}>Photography</NavLink>
				<NavLink activeClassName="active" to="/minecraftworlds" onClick={() => setMobileNavExpanded(false)}>Minecraft Worlds</NavLink>
				<NavLink activeClassName="active" to="/music" onClick={() => setMobileNavExpanded(false)}>Music</NavLink>
				<NavLink activeClassName="active" to="/about" onClick={() => setMobileNavExpanded(false)}>About Me</NavLink>
			</div>
		</nav>
		{/* <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw">Tweets by inkvoiid</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
	</header>
    );
};

export default Navbar;