import styled from "styled-components";
import DashboardItem from "../../../../shared/components/layout/DashboardItem";
import ExplorerDashboardItem from "../../../../shared/components/layout/DashboardItem";
import Heading from "../../../../shared/components/typography/Heading";
import Row from "../../../../shared/components/layout/Row";
import InsetSpan from "../../../../shared/components/ui/InsetSpan";
import Button from "../../../../shared/components/ui/Button";

const StyledExplorerDashboardFactsItem = styled.div`
  flex: 1;
`;
const PercentPie = styled.div`
  width: 150px;
  aspect-ratio: 1; /* Ensures it stays a circle */
  border-radius: 50%;
  /* Draw 60% one color, the rest another */
  background: conic-gradient(
    var(--color-blue-200) 0% 30%,
    var(--color-blue-0) 30% 100%
  );
`;

const StyledRows = styled(Row)`
  align-self: center;
`;

const StyledRow = styled(Row)`
  align-items: center;
`;
function ExplorerDashboardFactsItem() {
  return (
    <StyledExplorerDashboardFactsItem>
      <DashboardItem>
        <Heading as="h4" $color="var(--color-dark-100)">
          Exploration Facts
        </Heading>
        <Row $direction="horizontal" $align="flex-start" $gap="var(--gap-2xl)">
          <PercentPie />
          <StyledRows $gap="var(--gap-xl)">
            <StyledRow $direction="horizontal" $gap="var(--gap-xl)">
              <Row $direction="horizontal" $gap="var(--gap-md)">
                <Heading as="h6" $color="var(--color-dark-100)">
                  Started Explorations
                </Heading>
                <InsetSpan>5</InsetSpan>
              </Row>
              <Button $variation="secondary" $size="medium">
                Start a New Exploration
              </Button>
            </StyledRow>

            <StyledRow $direction="horizontal" $gap="var(--gap-xl)">
              <Row $direction="horizontal" $gap="var(--gap-md)">
                <Heading as="h6" $color="var(--color-dark-100)">
                  Completed Explorations
                </Heading>
                <InsetSpan>5</InsetSpan>
              </Row>

              <Button $variation="primary" $size="medium">
                Continue Exploring
              </Button>
            </StyledRow>
          </StyledRows>
        </Row>
      </DashboardItem>
    </StyledExplorerDashboardFactsItem>
  );
}

export default ExplorerDashboardFactsItem;
