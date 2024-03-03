import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const words = [" Shape ", " Create ", " Build ", "Design", "Engineer"];
  const interval = 2000;

  const DynamicText = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, interval);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <h2>
        I <span className="dynamic-word spin-animation">{words[index]}</span>{" "}
        the web with innovative and user-friendly solutions.
      </h2>
    );
  };

  return (
    <div className="hero-section">
      <h5>Hi, my name is</h5>
      <h1>Sumit Patel</h1>
      <DynamicText />
      <p>
        I'm a software engineer specializing in building exceptional digital
        experiences. I'm also a video editor (not a pro); I create animation
        videos and do transitional editing. Currently, I'm looking for a job
        opportunity, you can <span>Contact</span> me.
      </p>
    </div>
  );
};

export default HeroSection;
