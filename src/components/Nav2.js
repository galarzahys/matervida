import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from './logo3.png'


function Nav2() {

  const [showMobileMenu, setShowMobileMenu] = useState("mobileMenuOff");


  const HandleMobileMenu = () => {
    if (showMobileMenu === "mobileMenuOff") {
      setShowMobileMenu("mobileMenuOn");
    } else {
      setShowMobileMenu("mobileMenuOff");
    }
  };
  return (
    <>
      <div className="navBar">
        <figure className="logo-container">
                  <Link to="/#home">
        </Link>
        </figure>

        {/* Responsive Icons */}
        {showMobileMenu === "mobileMenuOff" ? (
          <FaBars className="hamburger" onClick={HandleMobileMenu} />
        ) : (
          <FaTimes className="hamburger" onClick={HandleMobileMenu} />
        )}

        <ul className={showMobileMenu + " ul-nav"}>
                  <li><Link className="li-nav" to="/">Voltar a Home</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Nav2;
