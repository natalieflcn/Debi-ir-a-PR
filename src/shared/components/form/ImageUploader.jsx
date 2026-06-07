import { useState } from "react";
import Row from "../layout/Row";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Input from "./Input";
import styled from "styled-components";

const StyledFileInput = styled.input`
  position: relative;
  align-content: center;
  height: 10rem;
`;

const InputWrapper = styled.div`
  flex: 1 1 0;
`;

function ImageUploader({ name, multiple = true }) {
  const [previews, setPreviews] = useState([]);

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => ({
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setPreviews((prev) => [...prev, ...newPreviews]);
  }

  function handleRemove(id) {
    setPreviews((prev) => prev.filter((preview) => preview.id !== id));
  }

  return (
    <InputWrapper>
      <Row $direction="horizontal" $gap="var(--gap-md)" $align="flex-start">
        <StyledFileInput
          type="file"
          name={name}
          accept="image/*"
          multiple={multiple}
          onChange={handleFileChange}
        />

        {previews.length > 0 && (
          <Row $direction="horizontal" $gap="var(--gap-md)">
            {previews.map((preview) => (
              <Row $gap="var(--gap-sm)" key={preview.id}>
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
                  onClick={() => handleRemove(preview.id)}
                >
                  Remove
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
