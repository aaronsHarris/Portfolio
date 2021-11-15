import styled from "styled-components";

export const Details = styled.div`
display: ${(props) => (props.clicked ? "flex" : "none")};
justify-content: space-between;
align-items: center;
`;