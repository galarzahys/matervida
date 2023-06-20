import React from 'react';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";


const Header = () => {

    return (
      
      <React.Fragment>
      
      <header id="home">
         <a className="smoothscroll" href="#about">
         <div className="row banner">
                        <div className="banner-text">
                            <img style={{ width: '400px' }} src="./logo3.png"></img>
               <h3 style={{color:'#fff', fontFamily:'Ubuntu '}}>{siteData.subtitle}
               </h3>
            </div>

         </div>
         </a>
      </header>
      </React.Fragment>
    );
  }

  export default Header
