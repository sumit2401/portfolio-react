import React from "react";
import "./SocialMedia.css";
import Github from "../Icons/Github";
import LeetCode from "../Icons/Leetcode";
import LinkedIn from "../Icons/Linkedin";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
const SocialMedia = () => {
  return (
    <div className="social-icon">
      <ul className="social">
        <li>
          <a href="https://github.com/sumit2401" target="blank">
            <Github />
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/sp1440793/" target="blank">
            <LeetCode />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sumit-patel-240240207/"
            target="blank"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sumit_patel24/" target="blank">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sumitpatel.__/" target="blank">
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
