import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Email from "./Components/Email/Email";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";

import HeroSection from "./Components/HeroSection/HeroSection";

import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import SocialMedia from "./Components/Socialmedia/SocialMedia";

function App() {
  return (
    <div className="App">
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
}

export default App;
