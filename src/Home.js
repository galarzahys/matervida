import React from "react";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import TipsSection from "./components/Tips";
import "./styles/MainStyleSheet.css";
import Nav from "./components/Nav";





function HomePage() {
  return (
      <>
      <Nav />
      <div className="app_container">
      <section id="home">
      <Header />
      </section>
      <About />
      <Testimonials />
      <TipsSection />
      </div>
    </>
  );
}

export default HomePage;
