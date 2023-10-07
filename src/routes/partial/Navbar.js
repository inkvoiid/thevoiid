import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../media/images/icons/menu.svg";
import "../../css/navbar.css";

function Navbar() {
  const [isMobileNavExpanded, setMobileNavExpanded] = useState(
    window.innerWidth > 600
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setMobileNavExpanded(true);
      } else {
        setMobileNavExpanded(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function closeDropdownAndTryCloseMobileNav() {
    if (window.innerWidth <= 600) {
      setMobileNavExpanded(false);
    }
  }

  return (
    <header id="nav">
      <nav>
        {/* Home */}
        <NavLink
          activeClassName="g"
          to="/"
          id="navtitle"
          onClick={() => closeDropdownAndTryCloseMobileNav()}
        >
          the voiid.
        </NavLink>

        <p id="splitter">{" | "}</p>

        {/* Mobile Hamburger */}
        <button
          id="hamburger"
          onClick={() => setMobileNavExpanded(!isMobileNavExpanded)}
        >
          <img src={MenuIcon} alt="Menu" />
        </button>

        <div
          id="navlinks"
          style={{ height: isMobileNavExpanded ? "100%" : "0%" }}
        >
          {/* Photography */}
          <NavLink
            activeClassName="active"
            to="/photography"
            onClick={() => closeDropdownAndTryCloseMobileNav()}
          >
            Photography
          </NavLink>

          {/* Minecraft Worlds */}
          <NavLink
            activeClassName="active"
            to="/minecraftworlds"
            onClick={() => closeDropdownAndTryCloseMobileNav()}
          >
            Minecraft Worlds
          </NavLink>

          {/* Music */}
          <NavLink
            activeClassName="active"
            to="/music"
            onClick={() => closeDropdownAndTryCloseMobileNav()}
          >
            Music
          </NavLink>

          {/* About Me */}
          <NavLink
            activeClassName="active"
            to="/about"
            onClick={() => closeDropdownAndTryCloseMobileNav()}
          >
            About Me
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
