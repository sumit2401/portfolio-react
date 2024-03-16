import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <IconLogo>
      <span className="container">
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
          className="top logo"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                id="Shape"
                fill="transparent"
                color="#64ffda"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              />
              <text
                x="25"
                y="63"
                font-family="Arial"
                font-size="50"
                fontWeight="600"
                fill="#64ffda"
              >
                S
              </text>
            </g>
          </g>
        </svg>
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
          className="bottom logo"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                id="Shape"
                fill="transparent"
                color="#64ffda"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              />
              <text
                x="25"
                y="63"
                font-family="Arial"
                font-size="50"
                fontWeight="600"
                fill="#282c34"
              >
                S
              </text>
            </g>
          </g>
        </svg>
      </span>
    </IconLogo>
  );
};

const IconLogo = styled.section`
  .container {
    position: relative;

    margin-left: 80px;
  }

  .logo {
    width: auto;
    height: 3rem;
    max-width: 100%;
    position: block;
  }

  .top {
    position: absolute;
    transition: transform 0.3s ease-in-out; /* Add a smooth transition */
  }

  .container:hover .top {
    transform: translateY(-3px) translateX(-2px);
  }

  @media (max-width: 769px) {
    .container {
      margin-left: 50px;
    }
  }
`;

export default Logo;
