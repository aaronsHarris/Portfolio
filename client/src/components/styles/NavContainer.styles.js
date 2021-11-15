import styled from "styled-components";

export const NavContainer = styled.div`
position: fixed;
.active {
  border-right: 4px solid var(--orange);
  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
  }
}
`;