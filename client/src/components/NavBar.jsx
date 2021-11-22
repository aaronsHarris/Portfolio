import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
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
// import { Link } from "react-router-dom";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Aaron
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="hero"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeclass="active"
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeclass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="project1"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeclass="active"
              >
                Project
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="project2"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeclass="active"
              >
                Project
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="project3"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeclass="active"
              >
                Project
              </NavLinks>
            </NavItem>
            
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="/contact"
             
            >
              Resume
            </NavBtnLink>
            <NavBtnLink
              to="/contact"
            
            >
              Contact
            </NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
