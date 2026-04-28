import styled from "styled-components";

const StyledImage = styled.img`
  object-fit: ${({ $objectFit }) => $objectFit || "contain"};
  width: ${({ $width }) => $width || "100%"};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius || "var(--border-radius-md)"};
`;

function Image({ src, alt, $width, $borderRadius, $objectFit }) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      $width={$width}
      $borderRadius={$borderRadius}
      $objectFit={$objectFit}
    />
  );
}

export default Image;
