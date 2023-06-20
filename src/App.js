import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./Home.js";
import VagasPage from "./vagasDetail";
import "./styles/MainStyleSheet.css";





function App() {
  return (
      <>
          <BrowserRouter>
      <div className="app_container">
              <section id="home">
                  <Routes>
                      <Route path='/' element={<HomePage />} />
                          <Route path='/Home' element={<HomePage />} />
                          <Route path='/Vagas/:id' element={<VagasPage />} />
                  </Routes>
      </section>
      <ContactUs />
      <Footer />
              </div>
              </BrowserRouter>
    </>
  );
}

export default App;
