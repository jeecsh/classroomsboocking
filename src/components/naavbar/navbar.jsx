import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar1">
      <div className="navbarContainer">
        <span className="logo1">classroombooking</span>
        <div className="navitems">
          <button className="navbutton"> register</button>
          <button className="navbutton"> login</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
