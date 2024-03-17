import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <FrontLoader>
      <div>
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
              >
                <animate
                  attributeName="points"
                  dur="3s"
                  repeatCount="indefinite"
                  values="39 0 0 22 0 67 39 90 78 68 78 23;
                  39 0 0 22 0 67 0 0 78 68 78 23;
                  39 0 0 22 0 67 0 0 0 0 78 23;
                  39 0 0 22 0 67 0 0 0 0 0 0;
                  39 0 0 22 0 67 39 90 0 0 0 0;
                  39 0 0 22 0 67 39 90 78 68 0 0;
                  39 0 0 22 0 67 39 90 78 68 78 23"
                />
              </polygon>
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
  width: 50px;
`;

export default Loader;
