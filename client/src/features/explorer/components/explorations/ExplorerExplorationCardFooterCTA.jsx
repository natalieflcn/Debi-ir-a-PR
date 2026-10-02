import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";
import Row from "../../../../shared/components/layout/Row";
import Heading from "../../../../shared/components/typography/Heading";
import Button from "../../../../shared/components/ui/Button";
import Image from "../../../../shared/components/ui/Image";

import SpinnerMini from "../../../../shared/components/ui/SpinnerMini";
import { useState } from "react";
import Modal from "../../../../shared/components/modal/Modal";
import DeleteConfirmationModal from "../../../../shared/components/modal/DeleteConfirmationModal";
import { useNavigate, useNavigation } from "react-router-dom";

const BadgeRow = styled(Row)`
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledRow = styled(Row)`
  text-align: center;
`;

function ExplorerExplorationCardFooterCTA({
  hasStarted,
  exploration,
  userHistory,
  onStartExploration,
  onEndExploration,
  mutateIsPending = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleDeleteOptions = {
    itemName: "your exploration progress",
    redirect: "the exploration",
    data: "exploration progress",
  };
  // async function handleClearExploration(explorationId) {
  //   console.log(explorationId);
  //   try {
  //     await endExploration(explorationId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const handleDeleteSuccess = async function () {
    navigate(`/explorations/${exploration.slug}`);
  };

  return (
    <Row $gap="var(--gap-lg)">
      <Card $cardColor="var(--color-light-100)">
        {mutateIsPending && (
          <Row $align="center">
            <SpinnerMini />
          </Row>
        )}

        {!mutateIsPending && !hasStarted && (
          <Row $direction="horizontal" $align="space-evenly">
            <Row $direction="horizontal" $gap="var(--gap-lg)">
              <Image
                src="/src/assets/images/content/TEMP.png"
                $borderRadius="round"
                $width="4rem"
              />
              <Heading as="h6">What are you waiting for?</Heading>
            </Row>
            <Button
              $variation="primary"
              $size="small"
              onClick={onStartExploration}
            >
              Start Exploring Now
            </Button>
          </Row>
        )}

        {!mutateIsPending &&
          hasStarted &&
          userHistory.status === "in_progress" && (
            <StyledRow
              $direction="vertical"
              $align="center"
              $gap="var(--gap-md)"
            >
              Complete this exploration to earn:
              <BadgeRow $direction="horizontal" $gap="var(--gap-lg)">
                <Image $width="5rem" src={exploration.badge.image} />
                <Heading as="h5" $color="var(--color-red-300)">
                  {exploration.badge.name}
                </Heading>
              </BadgeRow>
            </StyledRow>
          )}

        {!mutateIsPending &&
          hasStarted &&
          userHistory.status === "completed" && (
            <StyledRow
              $direction="vertical"
              $align="center"
              $gap="var(--gap-md)"
            >
              Congratulations! You completed this exploration and earned the
              following badge:
              <BadgeRow $direction="horizontal" $gap="var(--gap-lg)">
                <Image $width="5rem" src={exploration.badge.image} />
                <Heading as="h5" $color="var(--color-red-300)">
                  {exploration.badge.name}
                </Heading>
              </BadgeRow>
            </StyledRow>
          )}
      </Card>

      {!mutateIsPending && userHistory?.status !== undefined && (
        <Button
          $variation="primary"
          $size="medium"
          onClick={() => setIsModalOpen(true)}
        >
          {userHistory?.status === "in_progress"
            ? "End Exploration"
            : "Clear Exploration Progress"}
        </Button>
      )}

      {isModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsModalOpen(false)}
          onConfirmDelete={onEndExploration}
          onSuccess={handleDeleteSuccess}
          options={handleDeleteOptions}
        />
      )}
    </Row>
  );
}

export default ExplorerExplorationCardFooterCTA;
