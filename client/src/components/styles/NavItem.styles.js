import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavItem = styled(NavLink)`
text-decoration: none;
color: var(--white);
width: 100%;
padding: 1rem 0;
cursor: pointer;
display: flex;
padding-left: 1rem;
&:hover {
  border-right: 4px solid var(--orange);
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
  }
}
img {
  width: 1.2rem;
  height: auto;
  filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
    brightness(78%) contrast(85%);
}
`;