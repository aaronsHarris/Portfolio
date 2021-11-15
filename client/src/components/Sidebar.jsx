import logo from "../assets/logo.svg";
import Home from "../assets/Home.svg";
import star from "../assets/star.svg";
import contact from "../assets/contact.svg";
import folder from "../assets/folder.svg";
import styled from "styled-components";
import { useState } from "react";
import {BurgerButton} from './styles/BurgerButton.styled'
import { NavContainer } from "./styles/NavContainer.styles";
import { SidebarContainer } from "./styles/SidebarContainer.styles";
import { Logo } from "./styles/Logo.styled";
import { SlickBar } from "./styles/SlickBar.styled";
import { NavItem } from "./styles/NavItem.styles";
import { Text } from "./styles/Text.styles";
import { Profile } from "./styles/Profile.styled";
import { Details } from "./styles/Details.styles";
import { Name } from "./styles/Name.styles";
import { Logout } from "./styles/Logout.styles";


const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  return (
    <NavContainer>
    <BurgerButton clicked={click} onClick={() => handleClick()}></BurgerButton>
    <SidebarContainer>
      {/* <Logo>
        <img src={logo} alt="logo" />
      </Logo> */}
      <SlickBar clicked={click}>
        <NavItem
          onClick={() => setClick(false)}
          exact
          activeClassName="active"
          to="/"
        >
          <img src={Home} alt="Home" />
          <Text clicked={click}>Home</Text>
        </NavItem>
        <NavItem
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/about"
        >
          <img src={star} alt="about" />
          <Text clicked={click}>About Me</Text>
        </NavItem>
        <NavItem
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/projects"
        >
          <img src={folder} alt="projects" />
          <Text clicked={click}>Projects</Text>
        </NavItem>
        <NavItem
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/contact"
        >
          <img src={contact} alt="Contact" />
          <Text clicked={click}>Contact</Text>
        </NavItem>
        {/* <NavItem
          onClick={() => setClick(false)}
          activeClassName="active"
          to="/projects"
        >
          <img src={folder} alt="Projects" />
          <Text clicked={click}>Projects</Text>
        </NavItem> */}
      </SlickBar>

      <Profile clicked={profileClick}>
        <img
          onClick={() => handleProfileClick()}
          src="https://picsum.photos/200"
          alt="Profile"
        />
        <Details clicked={profileClick}>
          <Name>
            <h4>Aaron&nbsp;Harris</h4>
            <a href="#">view&nbsp;GitHub</a>
          </Name>

          {/* <Logout>
            <img src={star} alt="logout" />
          </Logout> */}
        </Details>
      </Profile>
    </SidebarContainer>
  </NavContainer>
);
};

export default Sidebar;
