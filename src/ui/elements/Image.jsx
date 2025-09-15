import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 5px;
  width: ${({ $width }) => $width || "100%"};
`;

function Image({ src, alt, $width }) {
  return <StyledImage src={src} alt={alt} $width={$width}></StyledImage>;
}

export default Image;
