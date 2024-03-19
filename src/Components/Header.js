import React from "react";
import styled from "styled-components";
import Logo from "./Icons/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <MainHeader>
      <div className="navbar">
        <Logo />
        <Navbar />
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;

  top: 0px;
  z-index: 11;
  margin-top: 20px;
  width: 100%;
  box-sizing: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  .navbar {
    display: flex;

    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 100%;
  }
`;

export default Header;
