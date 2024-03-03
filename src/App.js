import "./App.css";
import About from "./Components/About/About";
import Email from "./Components/Email/Email";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import SocialMedia from "./Components/Socialmedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SocialMedia />
      <Email />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
