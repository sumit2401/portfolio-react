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

  @media (max-width: 1440px) {
    .footer {
      margin-left: 650px;
    }
  }

  @media (max-width: 1024px) {
    .footer {
      width: 40%;
      margin-left: 420px;
    }

    .footer p {
      font-size: 13px;
      margin-left: 10px;
    }
    .footer .inspired {
      font-size: 13px;
      margin-top: -20px;
      margin-left: ;
    }
  }

  @media (max-width: 768px) {
    .footer {
      width: 40%;
      margin-left: 280px;
    }

    .footer p {
      font-size: 13px;
      margin-left: 10px;
    }
    .footer .inspired {
      font-size: 13px;
      margin-top: -20px;
      margin-left: ;
    }
  }

  @media (max-width: 425px) {
    .footer {
      width: 60%;
      margin-left: 115px;
    }
    .footer p {
      margin-left: 10px;
      font-size: 12px;
    }
    .footer .inspired {
      margin-top: -20px;
      margin-left: -20px;
      font-size: 12px;
    }
  }

  @media (max-width: 375px) {
    .footer {
      width: 100%;
      margin-left: 90px;
    }

    .footer p {
      margin-left: 10px;
      font-size: 12px;
    }
    .footer .inspired {
      margin-top: -20px;
      margin-left: -20px;
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    .footer {
      width: 100%;
      margin-left: 60px;
    }

    .footer p {
      margin-left: 10px;
      font-size: 12px;
    }
    .footer .inspired {
      margin-top: -20px;
      margin-left: -20px;
      font-size: 12px;
    }
  }
`;

export default Footer;
