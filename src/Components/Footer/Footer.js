import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <div className="footer">
        <p className="build">Desgined & Built by Sumit Patel</p>
        <p className="inspired">Took inspiration from Brittany Chiang</p>
      </div>
    </FooterBox>
  );
};
const FooterBox = styled.div`
  .footer {
    width: 50%;
    margin-left: 850px;
    text-align: center;
    cursor: context-menu;
    p {
      font-size: 14px;
    }

    .inspired {
      font-size: 13px;
      margin-left: -25px;
      padding: 20px;
    }

    &:hover p {
      color: #64ffda;
    }
  }

  @media (max-width: 1280px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 769px) {
    .footer {
      width: 40%;
      margin-left: 280px;
    }
  }

  @media (max-width: 500px) {
    .footer {
      width: 60%;
      margin-left: 150px;
    }
  }
`;

export default Footer;
