import styled from "styled-components";
import Card from "../layout/Card";
import Heading from "../typography/Heading";
import Bold from "../typography/Bold";
import SmallText from "../typography/SmallText";
import Row from "../layout/Row";
import Button from "../ui/Button";
import { FaAsterisk } from "react-icons/fa";
import { useState } from "react";
import { Form } from "react-router-dom";
import Input from "../form/Input";
import Modal from "../ui/Modal";

// const StyledProfileInformation = styled.div`
//   display: grid;
//   grid-template-columns: 12rem 1fr auto;
//   /* grid-template-rows: repeat(2, 1fr); */
//   align-items: start;
//   gap: var(--gap-lg) var(--gap-xl);
//   color: var(--color-dark-100);

//   @media (max-width: 800px) {
//     grid-template-columns: 8rem 1fr auto;
//     grid-template-rows: 1fr 1fr;
//   }
// `;

const StyledProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-lg);
  color: var(--color-dark-100);
  @media (max-width: 800px) {
    gap: var(--gap-2xl);
  }
`;

const ProfileRow = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr auto;
  grid-template-areas: "label value button";
  align-items: start;
  gap: var(--gap-lg) var(--gap-xl);

  /* @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "label value"
      "button button";
    row-gap: var(--gap-sm);
  } */

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "label"
      "value"
      "button";
    row-gap: var(--gap-sm);
    justify-items: center;
    text-align: center;
  }
`;

const ButtonArea = styled.div`
  grid-area: button;
  justify-self: flex-end;
  width: 13rem;
  /* border: 1px solid red; */

  @media (max-width: 800px) {
    width: 100%;
    justify-self: inherit; // or flex-end, your call
  }
`;

const LabelArea = styled(Heading)`
  grid-area: label;
`;

const ValueArea = styled.div`
  grid-area: value;
`;

const StyledRow = styled(Row)`
  display: grid;
  grid-template-columns: 1fr auto;
  min-width: 0;
  align-items: start;
  gap: var(--gap-xl);

  input {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--gap-md);
  }
`;

const InformationLabel = styled(Heading)`
  width: 12rem;
`;

const BoldInformation = styled(Bold)`
  width: 15rem;
  color: var(--color-red-300);
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledForm = styled(Form)`
  display: contents;
`;

const ProfileInformation = function ({
  userEmail,
  userPassword = "hello",
  dateJoined,
}) {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState(userPassword);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");

  const handleEmailSubmit = function (e) {
    e.preventDefault();

    let errors = "";

    if (!email.trim()) errors = "Please enter an email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors = "Please enter a valid email.";

    if (errors) {
      setEmailErrors(errors);
      return;
    }

    setIsEditingEmail(false);
  };

  const handleEmailCancel = function () {
    setEmail(userEmail);
    setIsEditingEmail(false);
    setEmailErrors("");
  };

  const handlePasswordSubmit = function (e) {
    e.preventDefault();

    let errors = "";

    if (!password.trim()) errors = "Please enter a password.";
    else if (password.length < 8) {
      errors = "Password must be at least 8 characters.";
    } else if (password !== confirmPassword) {
      errors = "Your passwords must match.";
    }

    if (errors) {
      setPasswordErrors(errors);
      return;
    }

    setIsEditingPassword(false);
  };

  const handlePasswordCancel = function () {
    setPassword(userPassword);
    setIsEditingPassword(false);
    setPasswordErrors("");
  };

  return (
    <Card $cardColor="var(--color-light-200)" $cardShadow="outsetMD">
      <StyledProfileInformation>
        <ProfileRow>
          <LabelArea as="h5">Email</LabelArea>

          {isEditingEmail ? (
            <StyledRow $direction="horizontal">
              <StyledForm method="patch" action="/profile/email">
                <Row $gap="var(--gap-xs)">
                  <Input
                    name="email"
                    value={email.toLowerCase()}
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  />
                  {emailErrors && <Bold>{emailErrors}</Bold>}
                </Row>
                <Row
                  $direction="horizontal"
                  $gap="var(--gap-md)"
                  $align="start"
                >
                  <Button
                    type="submit"
                    $variation="secondary"
                    $size="small"
                    onClick={handleEmailSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    type="button"
                    $variation="primary"
                    $size="small"
                    onClick={handleEmailCancel}
                  >
                    Cancel
                  </Button>
                </Row>
              </StyledForm>
            </StyledRow>
          ) : (
            <>
              <ValueArea>
                <Bold $color="var(--color-red-300)">{email.toLowerCase()}</Bold>
              </ValueArea>
              <ButtonArea>
                <StyledButton
                  $variation="primary"
                  $size="medium"
                  onClick={() => setIsEditingEmail(true)}
                >
                  Edit Email Address
                </StyledButton>
              </ButtonArea>
            </>
          )}
        </ProfileRow>

        <ProfileRow>
          <LabelArea as="h5">Password</LabelArea>

          {isEditingPassword ? (
            <StyledRow>
              <StyledForm>
                <Row $gap="var(--gap-xs)">
                  <Row $gap="var(--gap-md)">
                    <Input
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />

                    <Input
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm your password"
                    />

                    {passwordErrors && <Bold>{passwordErrors}</Bold>}
                  </Row>
                </Row>

                <Row
                  $direction="horizontal"
                  $gap="var(--gap-md)"
                  $align="start"
                >
                  <Button
                    type="submit"
                    $variation="secondary"
                    $size="small"
                    onClick={handlePasswordSubmit}
                  >
                    Save
                  </Button>
                  <Button
                    type="button"
                    $variation="primary"
                    $size="small"
                    onClick={handlePasswordCancel}
                  >
                    Cancel
                  </Button>
                </Row>
              </StyledForm>
            </StyledRow>
          ) : (
            <>
              <Bold $color="var(--color-red-300)">
                <ValueArea>
                  {Array.from({ length: password.length }, (_, index) => (
                    <FaAsterisk key={index} size={13} />
                  ))}
                </ValueArea>
              </Bold>
              <ButtonArea>
                <StyledButton
                  $variation="primary"
                  $size="medium"
                  onClick={() => setIsEditingPassword(true)}
                >
                  Edit Password
                </StyledButton>
              </ButtonArea>
            </>
          )}
        </ProfileRow>

        <ProfileRow>
          <LabelArea as="h5">Date Joined</LabelArea>
          <ValueArea>
            <Bold $color="var(--color-red-300)">Joined on {dateJoined}</Bold>
          </ValueArea>
          <ButtonArea>
            <StyledButton
              $variation="darkRed"
              $size="medium"
              onClick={() => setIsModalOpen(true)}
            >
              Delete Account
            </StyledButton>
          </ButtonArea>
        </ProfileRow>
      </StyledProfileInformation>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Row $gap="var(--gap-md)">
            <Row $align="center" $gap="var(--gap-sm)">
              <Bold $color="var(--color-red-300)">
                Are you sure you want to delete your account?
              </Bold>
              <SmallText>
                This is an irreversible action and all your progress will be
                lost.
              </SmallText>
            </Row>

            <Button
              $size="small"
              $variation="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              No, Return to profile
            </Button>
            <Button $size="small" $variation="primary">
              Yes, Delete my account
            </Button>
          </Row>
        </Modal>
      )}
    </Card>
  );
};

export default ProfileInformation;
