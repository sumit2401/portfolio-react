import React from 'react'
import './About.css'

import About_image from '../../Assets/Image/mine.jpg'
const About = () => {
  return (
    <div className='about-section' id="about" >
      <h2 className='about-heading'>About Me </h2>
      <div className="about">  <div className="aboutme">
        <p>
          Hello! I'm Sumit Patel, and I find joy in crafting and overseeing creations that exist on the vast canvas of the internet. My journey into the realm of web development commenced in 2019, coinciding with the start of my college adventure. It was during this time that I undertook my inaugural college project, a static e-commerce website, which served as a pivotal moment in my learning journey, offering invaluable insights into the intricacies of HTML, CSS and Javascript.<br />

          Presently, my focus revolves around the development of a robust e-commerce platform. Leveraging the power of <span>React.js</span> and the Context API, I'm actively shaping a fully functional digital marketplace. The backend of this endeavor is fortified by the seamless capabilities of <span>NodeJs</span>, <span>ExpressJs</span>, and the database is powered by <span>MongoDB</span>, ensuring not only a dynamic user experience but also robust authentication mechanisms.<br />

          My dedication to continuous learning and innovation fuels my passion for web development. Each project is an opportunity to refine my skills and contribute to the evolving landscape of the digital world. I'm excited about the limitless possibilities that lie ahead and the chance to create meaningful and impactful solutions.
        </p>
      </div>
        <div className="image">

          <div className="about-img">
            <img src={About_image} loading='lazy' alt="" />
            <div className='background' ></div>
            <div className="border"></div>
          </div>
        </div>


      </div></div>




  )
}

export default About
