import styled from "styled-components";
import Card from "../../../../shared/components/layout/Card";
import Heading from "../../../../shared/components/typography/Heading";
import Bold from "../../../../shared/components/typography/Bold";
import Row from "../../../../shared/components/layout/Row";
import Button from "../../../../shared/components/ui/Button";
import { FaAsterisk } from "react-icons/fa";

const StyledProfileInformation = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr auto;
  align-items: center;
  gap: var(--gap-lg) var(--gap-xl);
  color: var(--color-dark-100);
`;

const InformationLabel = styled(Heading)`
  width: 12rem;
`;

const BoldInformation = styled(Bold)`
  width: 15rem;
  color: var(--color-red-300);
`;

const StyledButton = styled(Button)`
  justify-self: flex-end;
`;
const ProfileInformation = function ({ email, passwordLength, dateJoined }) {
  return (
    <Card $cardColor="var(--color-light-200)">
      <StyledProfileInformation>
        <Heading as="h5">Email</Heading>
        <Bold $color="var(--color-red-300)">{email.toLowerCase()}</Bold>
        <Button $variation="primary" $size="medium">
          Edit Email Address
        </Button>

        <InformationLabel as="h5">Password</InformationLabel>

        <Bold $color="var(--color-red-300)">
          {Array.from({ length: passwordLength }, (_, index) => (
            <FaAsterisk key={index} size={13} />
          ))}
        </Bold>
        <Button $variation="primary" $size="medium">
          Edit Password
        </Button>

        <InformationLabel as="h5">Date Joined</InformationLabel>
        <Bold $color="var(--color-red-300)">Joined on {dateJoined}</Bold>
        <span />
      </StyledProfileInformation>
    </Card>
  );
};

export default ProfileInformation;
