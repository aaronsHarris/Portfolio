import styled from "styled-components";

export const Profile = styled.div`
width: ${(props) => (props.clicked ? "14rem" : "3rem")};
height: 3rem;
padding: 0.5rem 1rem;
/* border: 2px solid var(--orange); */
border-radius: 20px;
display: flex;
align-items: center;
justify-content: center;
margin-left: ${(props) => (props.clicked ? "11rem" : "0")};
background-color: var(--blue);
color: var(--orange);
transition: all 0.3s ease;
img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 2px solid var(--white);
    padding: 2px;
  }
}
`;