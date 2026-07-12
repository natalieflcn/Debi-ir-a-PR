import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Row from "../layout/Row";
import { IoIosCheckbox } from "react-icons/io";
import Heading from "../typography/Heading";
import styled from "styled-components";

const StyledFeaturedFormToggle = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.div`
  display: inline-block;
  cursor: pointer;
`;

function FeaturedFormToggle({ featured, onFeatured }) {
  return (
    <StyledFeaturedFormToggle>
      <Row $direction="horizontal" $gap="var(--gap-sm)" $align="flex-start">
        <StyledIcon onClick={() => onFeatured((prev) => !prev)}>
          {featured ? (
            <MdCheckBoxOutlineBlank size={25} fill="var(--color-red-200" />
          ) : (
            <IoIosCheckbox size={25} fill="var(--color-red-200" />
          )}
        </StyledIcon>
        <Heading as="h6" $color="var(--color-dark-200)">
          Mark this exploration as Featured?
        </Heading>
      </Row>
    </StyledFeaturedFormToggle>
  );
}

export default FeaturedFormToggle;
