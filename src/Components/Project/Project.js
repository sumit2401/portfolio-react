import React from "react";
import "./Project.css";
import project2 from "../../Assets/Image/newsverse.png";
import project1 from "../../Assets/Image/shopper.png";

import Github from "../Icons/Github";
import ExternalLink from "../Icons/ExternalLink";
const Project = () => {
  return (
    <div id="project" className="projects">
      <h2 className="project-heading">Some Things I’ve Built</h2>

      <div className="project1">
        <a
          className="project1-left"
          href="https://github.com/sumit2401/NewsVerse-React"
          target="blank"
        >
          <div className="project1-image">
            <img src={project1} alt="" />
            <div className="project1filter"></div>
          </div>
        </a>

        <div className="project1-right">
          <h5>Featured Project</h5>
          <a href="https://github.com/sumit2401/NewsVerse-React">
            Shopper-Ecommerce
          </a>

          <p>
            Newsverse deliver real-time worldwide news updates with categorized
            headlines. Stay informed effortlessly with our user-friendly
            interface and customizable alerts, covering diverse topics from
            politics to technology.
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
      {/* project2 */}

      <div className=" project2">
        <div className="project2-left description">
          <h5>Featured Project</h5>
          <a href="https://github.com/sumit2401/NewsVerse-React">Newsverse</a>

          <p>
            Newsverse deliver real-time worldwide news updates with categorized
            headlines. Stay informed effortlessly with our user-friendly
            interface and customizable alerts, covering diverse topics from
            politics to technology.
          </p>

          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>News Api</li>
            <li>Vercel</li>
          </ul>

          <div className="project2-social">
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
        <a
          className="project2-right image"
          href="https://github.com/sumit2401/NewsVerse-React"
          target="blank"
        >
          <div className="project2-image">
            <img src={project2} alt="" />
            <div className="project2filter"></div>
          </div>
        </a>
      </div>
      <div className="project1 project3">
        <a
          className="project1-left"
          href="https://github.com/sumit2401/NewsVerse-React"
          target="blank"
        >
          <div className="project1-image">
            <img src={project1} alt="" />
            <div className="project1filter"></div>
          </div>
        </a>

        <div className="project1-right">
          <h5>Featured Project</h5>
          <a href="https://github.com/sumit2401/NewsVerse-React">Textutils</a>

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
