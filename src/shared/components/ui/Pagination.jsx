import Row from "../layout/Row";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import Heading from "../typography/Heading";
import styled from "styled-components";

const ButtonNumber = styled.p`
  font-weight: var(--font-weight-bold);
  position: relative;
  bottom: 3px;
  right: 0.5px;
`;
function Pagination({ currentPage, totalPages, onPageChange, $variation }) {
  if (totalPages < 1) return null;

  const highlightedPage = $variation === "primary" ? "darkRed" : "darkBlue";

  return (
    <Row $direction="horizontal">
      <Button
        $size="square"
        $variation={$variation}
        disabled={currentPage === 1}
        onClick={() => onPageChange((prev) => prev - 1)}
      >
        <FaArrowLeft size={18} />
      </Button>

      <Row $direction="horizontal" $gap="var(--gap-xl)" $align="center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            $size="square"
            $variation={page === currentPage ? highlightedPage : $variation}
            onClick={() => onPageChange(page)}
          >
            <ButtonNumber>{page}</ButtonNumber>
          </Button>
        ))}
      </Row>
      <Button
        $size="square"
        $variation={$variation}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange((prev) => prev + 1)}
      >
        <FaArrowRight size={18} />
      </Button>
    </Row>
  );
}

export default Pagination;
