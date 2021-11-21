import { FaBars } from "react-icons/fa";
import {
  NavContainer,
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from "./styles/Nav.styled";
import { Link } from "react-router-dom";

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Aaron</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="hero">Home</NavLinks>
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
                  <NavBtn>
                      <NavBtnLink to='/contact'>Contact</NavBtnLink>
                  </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
