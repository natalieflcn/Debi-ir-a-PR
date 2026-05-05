import styled from "styled-components";

const Line = styled.hr`
  border: 1px solid ${({ $color }) => $color || "var(--color-dark-200)"};
`;

export default Line;
