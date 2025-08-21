import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ed333c;
  padding: 5px;
  border-radius: 2px;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
