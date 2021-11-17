import {FaBars} from "react-icons/fa";
import {
  NavContainer,
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles/Nav.styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Aaron</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
                  </NavMenu>
                  
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
