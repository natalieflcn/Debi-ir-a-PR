import styled from "styled-components";
import Logo from "../brand/Logo";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Bubbles from "../decorative/Bubbles";
import BlueOverlay from "../../../assets/images/ui/BlueOverlay.webp";
import Bold from "../typography/Bold";
import BouncingLoader from "../decorative/BouncingLoader";
import { useEffect, useState } from "react";
import { useAuth } from "../../../features/auth/contexts/AuthContext";
import Row from "../layout/Row";

const StyledNavWrapper = styled.div`
  position: sticky;

  top: 0;
  z-index: 2;
  width: 100%;

  background-color: ${({ theme }) => theme.backgroundColor};
  background-image: ${({ theme }) => theme.backgroundImage};
`;

const SleepingBanner = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-dark-200);
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--color-light-100);
  border-bottom: 3px solid var(--color-red-200);
  text-align: center;

  @media (max-width: 850px) {
    flex-direction: column;

    div {
      align-self: center;
      top: 3px;
    }
  }
`;

const StyledNavBar = styled.nav`
  display: flex;

  gap: 4rem;
  min-width: 0;
  align-items: center;
  max-width: 1200px;

  margin: 0 auto;
  padding: 1.5rem 1rem;
  overflow: hidden;

  background-image: ${({ theme }) => theme.backgroundImage};

  @media (max-width: 1200px) {
    gap: 3rem;
  }

  @media (max-width: 800px) {
    padding: 1.5rem 2rem;

    justify-content: space-between;
  }
`;

function NavBar({ menuItems }) {
  const { isServerSleeping } = useAuth();

  return (
    <StyledNavWrapper>
      {isServerSleeping && (
        <SleepingBanner>
          This app is running on a free instance of Render.
          <Row $direction="horizontal" $align="center" $gap="var(--gap-xs)">
            <Bold $color="var(--color-dark-100)">
              Please wait 1 minute for the server to wake up
            </Bold>
            <BouncingLoader />
          </Row>
        </SleepingBanner>
      )}
      <StyledNavBar>
        <Bubbles numBubbles={25} />
        <Logo />
        <NavDesktop menuItems={menuItems} />
        <NavMobile menuItems={menuItems}></NavMobile>
      </StyledNavBar>
    </StyledNavWrapper>
  );
}

export default NavBar;
