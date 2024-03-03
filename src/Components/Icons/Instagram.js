import React from "react";
import styled from "styled-components";

const Instagram = () => {
  return (
    <InstagramLogo>
      <div className="instagram-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          color="#8892b0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-instagram"
        >
          <title>Instagram</title>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </div>
    </InstagramLogo>
  );
};

const InstagramLogo = styled.div`
  .instagram-logo {
    width: 20px;
    height: 20px;
  }
  svg:hover {
    color: #64ffda;
  }
`;

export default Instagram;
