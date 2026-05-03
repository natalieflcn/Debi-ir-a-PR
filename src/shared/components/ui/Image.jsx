import styled from "styled-components";

const StyledImage = styled.img`
  object-fit: ${({ $objectFit }) => $objectFit || "contain"};
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto%"};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius || "var(--border-radius-md)"};
  box-shadow: ${({ $imageShadow }) => $imageShadow || "none"};
`;

function Image({
  src,
  alt,
  $width,
  $height,
  $borderRadius,
  $objectFit,
  $imageShadow,
}) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      $width={$width}
      $height={$height}
      $borderRadius={$borderRadius}
      $objectFit={$objectFit}
      $imageShadow={$imageShadow}
    />
  );
}

export default Image;
