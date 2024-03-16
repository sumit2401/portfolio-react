import React from "react";
import styled from "styled-components";

const Email = () => {
  return (
    <EmailRight>
      <div className="social-right">
        <div className="mailstyle">
          <a href="mailto:Sumit.Patel.0272@gmail.com">
            Sumit.Patel.0272@gmail.com
          </a>
        </div>
      </div>
    </EmailRight>
  );
};

const EmailRight = styled.div`
  .social-right {
    width: 40px;
    position: fixed;
    bottom: -28px;
    left: auto;
    right: 40px;
    z-index: 10;
    color: #8892b0;
  }
  .mailstyle {
    display: flex;
    flex-direction: column;

    align-items: center;
    position: relative;
    margin-left: 28px;

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 90px;
      margin: 20px auto;
      background-color: #8892b0;
    }
  }

  .social-right a {
    margin: 20px auto;
    font-size: 14px;

    letter-spacing: 2px;
    writing-mode: vertical-rl;
    color: #8892b0;
    text-decoration: none;

    &:hover {
      color: #64ffda;
      transform: translateY(-5px);
      transition-property: transform, color;
      transition-duration: 300ms;
      transition-timing-function: ease-in;
    }
  }

  @media (max-width: 1280px) {
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 769px) {
    .social-right {
      display: none;
    }
  }
  @media (max-width: 500px) {
    .social-right {
      display: none;
    }
  }
`;

export default Email;
