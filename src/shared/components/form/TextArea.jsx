import styled from "styled-components";

const StyledTextArea = styled.textarea`
  flex: 1 1 0;
  height: 5rem;
  box-shadow: 1px 1px 0 inset var(--color-dark-200);
  border-radius: var(--border-radius-sm);
  font-family: Museo;
  font-weight: var(--font-weight-medium);
  padding: 1rem;
  color: var(--color-dark-200);
`;

function TextArea({ placeholder, children, ...props }) {
  return (
    <StyledTextArea placeholder={placeholder} {...props}>
      {children}
    </StyledTextArea>
  );
}

export default TextArea;
