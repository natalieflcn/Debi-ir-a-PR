import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Row from "../../../../shared/components/layout/Row";
import Card from "../../../../shared/components/layout/Card";
import Image from "../../../../shared/components/ui/Image";
import { forwardRef } from "react";

const StyledProfileBadgeCollection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-sm);
`;

const ProfileBadgeCollection = function () {
  return (
    <StyledProfileBadgeCollection>
      <Row $direction="horizontal">
        <Heading as="h3" $shadowColor="var(--color-blue-300)">
          BADGE COLLECTION
        </Heading>
        <Heading as="h6">5 out of 100 badges collected</Heading>
      </Row>
      <Card $cardColor="var(--color-light-100)" $cardShadow="insetMd">
        {/* replace later with badge info */}
        <Row
          $direction="horizontal"
          $wrap="wrap"
          $gap="var(--gap-md)"
          $align="flex-start"
        >
          {Array.from({ length: 30 }, (_, index) => (
            <Image
              src="/src/assets/images/content/TEMP.png"
              key={index}
              $width="5rem"
            />
          ))}
        </Row>
      </Card>
    </StyledProfileBadgeCollection>
  );
};

export default ProfileBadgeCollection;
