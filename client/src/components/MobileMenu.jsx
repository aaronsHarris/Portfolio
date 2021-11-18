import React from "react";
import {
  MobileContainer,
  CloseIcon,
  Icon,
  MobileWrapper,
  MobileMenuItems,
  MobileLink,
  MobileBtnWrap,
  MobileRoute,
} from "./styles/MobileMenu.styled";

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MobileContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileWrapper>
        <MobileMenuItems>
          <MobileLink to="home" onClick={toggle}>
            Home
          </MobileLink>
          <MobileLink to="about" onClick={toggle}>
            About
          </MobileLink>
          <MobileLink to="projects" onClick={toggle}>
            Projects
          </MobileLink>
          <MobileLink to="contact" onClick={toggle}>
            Contact
          </MobileLink>
        </MobileMenuItems>
        <MobileBtnWrap>
          <MobileRoute to='/contact'>Contact</MobileRoute>
              </MobileBtnWrap>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default MobileMenu;
