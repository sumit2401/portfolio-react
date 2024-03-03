import React from "react";
import styled from "styled-components";

const Linkedin = () => {
  return (
    <LinkedinIcon>
      {" "}
      <div className="linkedin-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          color="#8892b0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-linkedin"
        >
          <title>LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </div>
    </LinkedinIcon>
  );
};

const LinkedinIcon = styled.div`
  .linkedin-icon {
    width: 20px;
    height: 20px;
  }
  svg:hover {
    color: #64ffda;
  }
`;

export default Linkedin;
