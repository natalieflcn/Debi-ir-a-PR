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

const StyledProfileInformation = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr auto;
  /* grid-template-rows: repeat(2, 1fr); */
  align-items: start;
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
    console.log("update email " + email);
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
    console.log("update password " + password);
  };

  const handlePasswordCancel = function () {
    setPassword(userPassword);
    setIsEditingPassword(false);
    setPasswordErrors("");
  };
  return (
    <Card $cardColor="var(--color-light-200)" $cardShadow="outsetMD">
      <StyledProfileInformation>
        <Heading as="h5">Email</Heading>

        {isEditingEmail ? (
          <StyledForm method="patch" action="/profile/email">
            <Row $gap="var(--gap-xs)">
              <Input
                name="email"
                value={email.toLowerCase()}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
              />
              {emailErrors && <Bold>{emailErrors}</Bold>}
            </Row>
            <Row $direction="horizontal" $gap="var(--gap-md)">
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
        ) : (
          <>
            <Bold $color="var(--color-red-300)">{email.toLowerCase()}</Bold>
            <Button
              $variation="primary"
              $size="medium"
              onClick={() => setIsEditingEmail(true)}
            >
              Edit Email Address
            </Button>
          </>
        )}

        <InformationLabel as="h5">Password</InformationLabel>

        {isEditingPassword ? (
          <>
            <StyledForm>
              <Row $gap="var(--gap-xs)">
                <Input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />

                <Row $gap="var(--gap-xs)">
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
              <Row $direction="horizontal" $gap="var(--gap-md)">
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
          </>
        ) : (
          <>
            <Bold $color="var(--color-red-300)">
              {Array.from({ length: password.length }, (_, index) => (
                <FaAsterisk key={index} size={13} />
              ))}
            </Bold>
            <Button
              $variation="primary"
              $size="medium"
              onClick={() => setIsEditingPassword(true)}
            >
              Edit Password
            </Button>
          </>
        )}

        <InformationLabel as="h5">Date Joined</InformationLabel>
        <Bold $color="var(--color-red-300)">Joined on {dateJoined}</Bold>
        <Button
          $variation="darkRed"
          $size="medium"
          onClick={() => setIsModalOpen(true)}
        >
          Delete Account
        </Button>
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
