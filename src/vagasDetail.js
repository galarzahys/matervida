import React from "react";
import "./styles/MainStyleSheet.css";
import { useParams } from 'react-router-dom';
import siteData from './siteData.js';
import Nav2 from "./components/Nav2";





function VagasPage(props) {

    const { id } = useParams();

    const tip = siteData.tips.find((tip) => tip.id == id);

    if (!tip) {
        return <><br />
              <br />
            <br /> 
            <div>Detalhe não encontrad!</div>
            </> 
    }



  return (
      <>
          <Nav2 />
          <div className="app_container" >
              <br />
              <br />
              <br />
              <div className="vaga-img" style={{ 'background-image': `url('../images/tips/oportunidade.jpg')`, height: '30vh', 'background-repeat': 'no-repeat', 'background-size': 'cover', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <h1 style={{ color: '#8D6C7D', textAlign: 'center' }} >
                      VAGA ABERTA
                  </h1>
                  <h1 style={{ color: '#8D6C7D', textAlign: 'center', textShadow: '1px 1px 3px #000' }} >
                      {tip.title}
                  </h1>
              </div>
          </div>
          <section style={{ background: '#fff', color: '#000', width: '90%', margin: '5%' }}>
              <h5 style={{
                  background: '#6a9582', color: '#000', height: '2rem', padding: '5px'
              }}>{siteData.descricao}</h5>
              
              <p style={{ padding: '10px' }}>
                  {tip.content}
              </p>
              <h5 style={{
                  background: '#6a9582', color: '#000', height: '2rem', padding: '5px'
              }}>Responsabilidades:</h5>
              <p style={{ padding: '10px' }}>
                  <ul>
                      {tip.responsabilities.map(item => (
                          <li>{item}
                          </li>
                      ))}
                  </ul>
                  
              </p>
              <h5 style={{
                  background: '#6a9582', color: '#000', height: '2rem', padding: '5px'
              }}>Requisitos:</h5>
              <p style={{ padding: '10px' }}>
                  <ul>
                      {tip.requisitos.map(item => (
                          <li>{item}
                          </li>
                      ))}
                  </ul>
              </p>

          </section>
    </>
  );
}

export default VagasPage;
