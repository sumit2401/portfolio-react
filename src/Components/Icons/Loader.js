import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <FrontLoader>
      <div className="loader">
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
              <path
                id="Shape"
                color="#64ffda"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M39,0 L0,22 L0,67 L39,90 L78,68 L78,23 Z"
              />
              <text
                x="22"
                y="63"
                font-family="Arial"
                font-size="50"
                fontWeight="500"
                fill="#64ffda"
              >
                S
              </text>
            </g>
          </g>
        </svg>
      </div>
    </FrontLoader>
  );
};

const FrontLoader = styled.div`
  .loader {
    width: 70px;
    text-align: center;
    margin-top: 450px;
    margin-left: 900px;
  }

  .loader .logo path {
    stroke-dasharray: 271;
    stroke-dashoffset: 271;

    animation: dash 2s linear infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 271;
    }
    17% {
      stroke-dashoffset: 318;
    }
    34% {
      stroke-dashoffset: 365;
    }
    51% {
      stroke-dashoffset: 412;
    }
    68% {
      stroke-dashoffset: 459;
    }
    85% {
      stroke-dashoffset: 506;
    }
    100% {
      stroke-dashoffset: 553;
    }
  }

  .loader .logo text {
    animation: blink 2s ease-in-out normal forwards;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    17% {
      opacity: 0;
    }
    34% {
      opacity: 0;
    }
    51% {
      opacity: 0;
    }
    68% {
      opacity: 0;
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    margin-left: -550px;
    margin-top: -100px;
  }

  @media (max-width: 425px) {
    margin-left: -720px;
    margin-top: -100px;
  }

  @media (max-width: 375px) {
    margin-left: -745px;
    margin-top: -150px;
  }

  @media (max-width: 320px) {
    margin-left: -765px;
    margin-top: -150px;
  }
`;

export default Loader;
