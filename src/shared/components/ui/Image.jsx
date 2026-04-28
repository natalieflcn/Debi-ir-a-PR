import styled, { css } from "styled-components";

const StyledImage = styled.img`
  width: ${({ $width }) => $width || "100%"};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius || "var(--border-radius-md)"};

  ${({ $css }) => $css && css($css)}
`;

function Image({ src, alt, $width, $borderRadius, $css }) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      $width={$width}
      $borderRadius={$borderRadius}
      $css={$css}
    />
  );
}

export default Image;
