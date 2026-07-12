import styled from "styled-components";
import Button from "../../../shared/components/ui/Button";

const StyledLabelOn = styled.span`
  color: var(--color-yellow-300);
`;

const StyledLabelOff = styled.span`
  color: var(--color-yellow-0);
`;

function FeaturedExplorationToggle({ showFeatured, onShowFeatured }) {
  return (
    <Button
      $variation="yellow"
      $size="small"
      onClick={() => onShowFeatured(!showFeatured)}
    >
      Featured:{" "}
      {showFeatured ? (
        <StyledLabelOn>ON</StyledLabelOn>
      ) : (
        <StyledLabelOff>OFF</StyledLabelOff>
      )}
    </Button>
  );
}

export default FeaturedExplorationToggle;
