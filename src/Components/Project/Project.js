import React from "react";
import "./Project.css";
import project1 from "../../Assets/Image/shopper.png";
import project2 from "../../Assets/Image/seeker.png";
import project3 from "../../Assets/Image/newsverse.png";

import Github from "../Icons/Github";
import ExternalLink from "../Icons/ExternalLink";
const Project = () => {
  return (
    <div id="project" className="projects">
      <h2 className="project-heading">Some Things I’ve Built</h2>

      <div className="project1">
        <a
          className="project1-left"
          href="https://github.com/sumit2401/Shopper"
          target="blank"
        >
          <div className="project1-image">
            <img src={project1} alt="" />
            <div className="project1filter"></div>
          </div>
        </a>

        <div className="project1-right">
          <h5>Featured Project</h5>
          <a href="https://github.com/sumit2401/Shopper">Shopper-Ecommerce</a>

          <p>
            an immersive online shopping experience with Shopper, a dynamic
            E-commerce platform tailored for users to effortlessly discover and
            shop for their favorite clothes.
          </p>

          <ul>
            {" "}
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Node</li>
            <li>Vercel</li>
          </ul>

          <div className="project-social">
            <a
              href="https://github.com/sumit2401/Shopper"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://github.com/sumit2401/Shopper"
              aria-label="external link"
              target="blank"
            >
              <ExternalLink />
            </a>
          </div>
        </div>
      </div>
      {/* project2 */}

      <div className=" project2">
        <div className="project2-left description">
          <h5>Featured Project</h5>
          <a href="https://github.com/sumit2401/Seekers">Seekers-Job Portal </a>

          <p>
            A dynamic Job Portal to revolutionize your job search experience,
            seamlessly navigating through extensive job listings.
          </p>

          <ul>
            <li>React</li>
            <li>Express Js</li>
            <li>Job Api</li>
            <li>Tailwind CSS</li>
          </ul>

          <div className="project2-social">
            <a
              href="https://github.com/sumit2401/Seekers"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://github.com/sumit2401/Seekers"
              aria-label="external link"
              target="blank"
            >
              <ExternalLink />
            </a>
          </div>
        </div>
        <a
          className="project2-right image"
          href="https://github.com/sumit2401/Seekers"
          target="blank"
        >
          <div className="project2-image">
            <img src={project2} alt="" />
            <div className="project2filter"></div>
          </div>
        </a>
      </div>

      {/* project3 */}
      <div className="project1 project3">
        <a
          className="project1-left"
          href="https://github.com/sumit2401/NewsVerse-React"
          target="blank"
        >
          <div className="project1-image">
            <img src={project3} alt="" />
            <div className="project1filter"></div>
          </div>
        </a>

        <div className="project1-right">
          <h5>Featured Project</h5>
          <a href="https://github.com/sumit2401/NewsVerse-React">NewsVerse</a>

          <p>
            Newsverse deliver real-time worldwide news updates with categorized
            headlines. Stay informed effortlessly with our user-friendly
            interface and customizable alerts, covering diverse topics from
            politics to technology.
          </p>

          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Bootstrap</li>

            <li>Netlify</li>
          </ul>

          <div className="project-social">
            <a
              href="https://github.com/sumit2401/NewsVerse-React"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://github.com/sumit2401/NewsVerse-React"
              aria-label="external link"
              target="blank"
            >
              <ExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
