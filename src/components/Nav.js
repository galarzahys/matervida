import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function Nav() {

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
        <a href="#home">
            <img className="img-logo" src='./images/logo3.png' alt="logo MV" />
        </a>
        </figure>

        {/* Responsive Icons */}
        {showMobileMenu === "mobileMenuOff" ? (
          <FaBars className="hamburger" onClick={HandleMobileMenu} />
        ) : (
          <FaTimes className="hamburger" onClick={HandleMobileMenu} />
        )}

        <ul className={showMobileMenu + " ul-nav"}>
                  <li><a className="li-nav" href="#about">Quem somos</a></li>
                  <li><a className="li-nav" href="#testimonials">Nossos cuidados</a></li>
                  <li><a className="li-nav" href="#tips">Trabalhe Conosco</a></li>

               <li><a className="li-nav" href="#contact">Contato</a></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
