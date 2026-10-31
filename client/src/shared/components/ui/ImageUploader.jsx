import { useRef, useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Input from "../form/Input";
import styled from "styled-components";
import { useEffect } from "react";
import SmallText from "../typography/SmallText";
import Bold from "../typography/Bold";
import { optimize } from "../../utils/helpers";

const StyledFileInput = styled.input`
  position: relative;
  align-content: center;
  justify-self: flex-end;
  height: 10rem;
  display: none;
`;

const InputWrapper = styled.div`
  flex: 1 1 0;

  @media (max-width: 690px) {
    align-self: center;
  }
`;

const StyledRow = styled(Row)`
  @media (max-width: 690px) {
    align-items: center;
  }
`;

const ImagesRow = styled(Row)`
  @media (max-width: 690px) {
    flex-direction: column;
    gap: var(--gap-lg);
  }
`;

const UploadButton = styled(Button)`
  &:hover {
    ${({ $limitReached }) =>
      $limitReached && `background-color: var(--color-red-400)`};
  }
`;

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 5 * 1024 * 1024;

function PreviewImage({ item, ...props }) {
  const isFile = item instanceof File;
  const [blobUrl, setBlobUrl] = useState(null);

  useEffect(() => {
    if (!isFile) return;
    const url = URL.createObjectURL(item);
    setBlobUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [item, isFile]);

  const src = isFile
    ? blobUrl
    : typeof item === "string"
      ? item
      : (optimize(item?.url) ?? item?.secure_url);

  return src ? <Image src={src} {...props} /> : null;
}

function getKey(item, index) {
  if (item instanceof File)
    return `${item.name}-${item.size}-${item.lastModified}`;
  return typeof item === "string"
    ? item
    : (item.publicId ?? optimize(item.url) ?? index);
}

function ImageUploader({
  name,
  multiple = true,
  maxImages = 10,
  value = [],
  onChange,
}) {
  // const [value, setPreviews] = useState([]);

  const inputRef = useRef(null);
  // const objectUrls = useRef(new Map()); // File -> blob URL

  // Normalize: handles [], a single object, a legacy string, or null
  const items = Array.isArray(value) ? value : value ? [value] : [];

  const isFull = items.length >= maxImages && maxImages > 1;

  function handleFileChange(e) {
    const files = Array.from(e.target.files).filter(
      (f) => ALLOWED_TYPES.includes(f.type) && f.size <= MAX_SIZE,
    );
    e.target.value = ""; // lets the user pick the same file again
    if (files.length === 0) return;

    if (maxImages === 1) {
      onChange([files[0]]); // replace
      return;
    }

    const slotsRemaining = maxImages - items.length;
    if (slotsRemaining <= 0) return;
    onChange([...items, ...files.slice(0, slotsRemaining)]);
  }

  function handleDelete(index) {
    onChange(items.filter((_, i) => i !== index));
  }

  // function getPreviewUrl(item) {
  //   if (item instanceof File) {
  //     if (!objectUrls.current.has(item))
  //       objectUrls.current.set(item, URL.createObjectURL(item));
  //     return objectUrls.current.get(item);
  //   }
  //   return typeof item === "string" ? item : item.url;
  // }

  // // Revoke blob URLs for files that were removed or replaced by uploaded results
  // useEffect(() => {
  //   const current = new Set(items.filter((item) => item instanceof File));
  //   for (const [file, url] of objectUrls.current) {
  //     if (!current.has(file)) {
  //       URL.revokeObjectURL(url);
  //       objectUrls.current.delete(file);
  //     }
  //   }
  // }, [items]);

  // // Revoke everything on unmount
  // useEffect(() => {
  //   const urls = objectUrls.current;
  //   return () => {
  //     urls.forEach((url) => URL.revokeObjectURL(url));
  //     urls.clear();
  //   };
  // }, []);

  // function handleFileChange(e) {
  //   const files = Array.from(e.target.files).filter(
  //     (f) => ALLOWED_TYPES.includes(f.type) && f.size <= MAX_SIZE,
  //   );
  //   e.target.value = ""; // lets the user pick the same file again

  //   const slotsRemaining = maxImages - items.length;
  //   if (slotsRemaining <= 0) return;

  //   onChange([...items, ...files.slice(0, slotsRemaining)]);
  // }

  // function handleFileChange(e) {
  //   const files = Array.from(e.target.files).filter(
  //     (f) => ALLOWED_TYPES.includes(f.type) && f.size <= MAX_SIZE,
  //   );
  //   e.target.value = "";
  //   if (files.length === 0) return;

  //   if (maxImages === 1) {
  //     onChange([files[0]]); // replace
  //     return;
  //   }

  //   const slotsRemaining = maxImages - items.length;
  //   if (slotsRemaining <= 0) return;
  //   onChange([...items, ...files.slice(0, slotsRemaining)]);
  // }

  // function handleDelete(index) {
  //   onChange(items.filter((_, i) => i !== index));
  // }

  // const isFull = items.length >= maxImages;

  return (
    <InputWrapper>
      <StyledRow $gap="var(--gap-2xl)" $align="flex-start">
        <StyledFileInput
          type="file"
          name={name}
          accept="image/*"
          multiple={multiple}
          onChange={handleFileChange}
          ref={inputRef}
        />

        <Row $gap="var(--gap-sm)">
          <UploadButton
            type="button"
            onClick={() => inputRef.current.click()}
            disabled={isFull}
            $size="small"
            $variation={isFull ? "darkRed" : "primary"}
            $limitReached={isFull}
          >
            {isFull ? "Limit Reached" : "Upload Images"} ({items.length}/
            {maxImages})
          </UploadButton>
          <SmallText $color="var(--color-dark-200)">
            Only image files with{" "}
            <Bold $color="var(--color-dark-200)">.jpg</Bold>,{" "}
            <Bold $color="var(--color-dark-200)">.jpeg</Bold>,{" "}
            <Bold $color="var(--color-dark-200)">.png</Bold>, and{" "}
            <Bold $color="var(--color-dark-200)">.webp</Bold>, will be accepted.
          </SmallText>
        </Row>

        {items.length > 0 && (
          <ImagesRow
            $direction="horizontal"
            $gap="var(--gap-lg)"
            $wrap="wrap"
            $align="start"
          >
            {items.map((item, index) => (
              <Row $gap="var(--gap-sm)" key={getKey(item, index)}>
                <PreviewImage
                  item={item}
                  $width="7rem"
                  $height="7rem"
                  $objectFit="cover"
                />
                <Button
                  type="button"
                  $variation="darkRed"
                  $size="extraSmall"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </Row>
            ))}
          </ImagesRow>
        )}
      </StyledRow>
    </InputWrapper>
  );
}

export default ImageUploader;
