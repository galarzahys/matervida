import React from 'react';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";
import { useNavigate } from "react-router-dom";


const TipsSection = () => {


    const navigate = useNavigate()

    return (
      <section id="tips">
                 <h1>Vagas Abertas</h1>
         <div className="row tips">
            {siteData.tips.map((item)=>{
              return (
              <>
              <div className="tipCard_container">
                <div className="tipCard">
                    <div className="tipCard_img" style={{ backgroundImage: `url('images/tips/${item.image}.jpg')`}}></div>
                      <div className="tipCard_text">
                                  <h5>{item.title}</h5>
                                  <button className="button-tip" onClick={() => { navigate(`/Vagas/${item.id}`) }}>Saiba mais</button>

                      </div> 
                    </div>
                    </div>
                </>
                )
            })}

         </div>

         <h3>Quer saber mais? Fale-Conosco</h3>


      </section>
    );
  }

  export default TipsSection