import React from 'react';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import { IoIosArrowDropupCircle } from 'react-icons/io'



const Footer = () => {

    return (
      <footer>
      <div className="row"> 
      <a href='#home' className='go-top'>
      <IoIosArrowDropupCircle/>
      </a>
                <h4>Segue MaterVida nas redes sociais!</h4>
      <div className='social_links'>
      <a  href='https://www.instagram.com/' target="_blank" rel='noopener noreferrer' className='social_icon'><FaInstagram /></a>
      <a  href='https://www.facebook.com/' target="_blank" rel='noopener noreferrer' className='social_icon'><FaFacebook /></a>
      <a  href='https://www.twitter.com/' target="_blank" rel='noopener noreferrer' className='social_icon'><FaTwitter /></a>
      </div>
      </div>
    </footer>
    );
  }

export default Footer