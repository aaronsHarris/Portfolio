import React from "react";
import { NavContainer, Nav, NavLogo } from "./styles/Nav.styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to='Home'>Aaron</NavLogo>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;