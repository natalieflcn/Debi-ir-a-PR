import { useRef, useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Input from "./Input";
import styled from "styled-components";

const StyledFileInput = styled.input`
  position: relative;
  align-content: center;
  justify-self: flex-end;
  height: 10rem;
  display: none;
`;

const InputWrapper = styled.div`
  flex: 1 1 0;
`;

const UploadButton = styled(Button)`
  &:hover {
    ${({ $limitReached }) =>
      $limitReached && `background-color: var(--color-red-400)`};
  }
`;

function ImageUploader({
  name,
  multiple = true,
  maxImages = 3,
  value = [],
  onChange,
}) {
  // const [value, setPreviews] = useState([]);

  const inputRef = useRef(null);

  const previews = value.map((file) => ({
    id: crypto.randomUUID(),
    url: URL.createObjectURL(file),
    name: file.name,
  }));

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    const slotsRemaining = maxImages - value.length;

    if (slotsRemaining <= 0) {
      alert(`Maximum of ${maxImages} images allowed`);
      return;
    }

    const acceptedFiles = files.slice(0, slotsRemaining);

    onChange([...value, ...acceptedFiles]);
  }

  function handleDelete(fileName) {
    onChange(value.filter((file) => file.name !== fileName));
  }

  return (
    <InputWrapper>
      <Row $gap="var(--gap-2xl)" $align="flex-start">
        <StyledFileInput
          type="file"
          name={name}
          accept="image/*"
          multiple={multiple}
          onChange={handleFileChange}
          ref={inputRef}
        />

        <UploadButton
          type="button"
          onClick={() => inputRef.current.click()}
          disabled={value.length >= maxImages}
          $size="small"
          $variation={value.length === maxImages ? "darkRed" : "primary"}
          $limitReached={value.length === maxImages}
        >
          {value.length === maxImages ? "Limit Reached" : "Upload Images"} (
          {value.length}/{maxImages})
        </UploadButton>

        {previews.length > 0 && (
          <Row $direction="horizontal" $gap="var(--gap-md)">
            {previews.map((preview) => (
              <Row $gap="var(--gap-sm)" key={preview.name}>
                <Image
                  src={preview.url}
                  $width="7rem"
                  $height="7rem"
                  $objectFit="cover"
                />
                <Button
                  type="button"
                  $variation="darkRed"
                  $size="extraSmall"
                  onClick={() => handleDelete(preview.name)}
                >
                  Delete
                </Button>
              </Row>
            ))}
          </Row>
        )}
      </Row>
    </InputWrapper>
  );
}

export default ImageUploader;
