import styled from "styled-components";

export const Name = styled.div`
padding: 0 1.5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h4 {
  display: inline-block;
}
a {
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--white);
  &:hover {
    text-decoration: underline;
  }
}
`;