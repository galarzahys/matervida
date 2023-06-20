import React from 'react';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";


const About = () => {

    return (
      <section id="about">
         <div className="row">
            <div className="about_img_cont">
               <img className="about-pic"  src="images/mv3.jpg" alt="" />
            </div>
            <div className="about_text_container">
               <h2>Quem somos</h2>
               <p>{siteData.about}</p>
            </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
            <div className="about_text_container">
                    <h2>{siteData.misionT}</h2>
               <p>{siteData.mision}</p>
               <br></br>
            </div>
            <div className="about_img_cont">
               <img className="about-pic"  src="images/mv7.jpg" alt="" />
            </div>

            </div>
            <div className="row">
                <div className="about_img_cont">
                    <img className="about-pic" src="images/mv6.jpg" alt="" />
                </div>
                <div className="about_text_container">
                    <h2>{siteData.visionT}</h2>
                    <p>{siteData.vision}</p>
                </div>
            </div>
      </section>
    );
  }

export default About