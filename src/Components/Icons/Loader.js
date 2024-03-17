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
              <polygon
                id="Shape"
                fill="transparent"
                color="#64ffda"
                stroke="currentColor"
                strokeWidth="5"
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

  .loader .logo g {
    stroke-dasharray: 2300;
    stroke-dashoffset: 2000;
  }
`;

export default Loader;
