import { useState } from "react";
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
  const [imgSrc, setImgSrc] = useState(
    src || "/src/assets/images/placeholders/default.png",
  );

  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      $width={$width}
      $height={$height}
      $borderRadius={$borderRadius}
      $objectFit={$objectFit}
      $imageShadow={$imageShadow}
      onError={() => setImgSrc("/src/assets/images/placeholders/default.png")}
    />
  );
}

export default Image;
