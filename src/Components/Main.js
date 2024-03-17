import React from "react";
import Header from "./Header";
import SocialMedia from "./Socialmedia/SocialMedia";
import Email from "./Email/Email";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

import "../App.css";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <SocialMedia />
      <Email />
      <div className="main">
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
