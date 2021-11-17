import React from "react";
import { MobileContainer, CloseIcon, Icon, MobileWrapper, MobileMenuItems, MobileLink, MobileBtnWrap, MobileRoute } from "./styles/MobileMenu.styled";

const MobileMenu = () => {
  return (
    <MobileContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <MobileWrapper>
        <MobileMenuItems>
          <MobileLink to="home">Home</MobileLink>
          <MobileLink to="about">About</MobileLink>
          <MobileLink to="projects">Projects</MobileLink>
          <MobileLink to="contact">Contact</MobileLink>
              </MobileMenuItems>
              {/* <MobileBtnWrap>
          <MobileRoute to='/contact'>Contact</MobileRoute>
              </MobileBtnWrap> */}
          </MobileWrapper>
    </MobileContainer>
  );
};

export default MobileMenu;
