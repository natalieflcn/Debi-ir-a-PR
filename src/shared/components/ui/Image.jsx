import styled, { css } from "styled-components";

const StyledImage = styled.img`
  border-radius: 5px;
  width: ${({ $width }) => $width || "100%"};
  ${({ $css }) => $css && css($css)}
`;

function Image({ src, alt, $width, $css }) {
  return (
    <StyledImage src={src} alt={alt} $width={$width} $css={$css}></StyledImage>
  );
}

export default Image;
