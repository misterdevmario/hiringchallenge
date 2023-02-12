import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();
  return (
    <nav className="navbar_container">
      <div className="navbar_container-lg">
        <div className="navbar_container-appname">
          <h1>Xperience</h1>
          <SiYourtraveldottv />
        </div>
        <h2 className="navbar_container-pagename">
          {location.pathname === "/"
            ? "Home"
            : location.pathname.replace("/", "")}
        </h2>
        <div className="navbar_container-home-btn">
          {location.pathname !== "/" ? (
            
              <h2><NavLink to={"/"}>Home</NavLink></h2>
            
          ) : null}
       
        </div>
      </div>
      <div className="navbar_container-toggle">
        <div className="navbar_container-appname-toggle">
          <h1>Xperience</h1>
          <SiYourtraveldottv size={20} />
        </div>
        
        <div className="navbar_container-toggle-dropdown">
          {toggleNav ? (
            <AiOutlineMenuUnfold
              size={40}
              onClick={() => setToggleNav(false)}
            />
          ) : (
            <AiOutlineMenuFold size={40} onClick={() => setToggleNav(true)} />
          )}
          {toggleNav && (
            <div className="navbar_container-toggle-links">
              <div className="navbar_container-home-btn-toggle">
                {location.pathname !== "/" ? (
                  <NavLink onClick={() => setToggleNav(false)} to={"/"}>Home</NavLink>
                ) : null}
             
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
