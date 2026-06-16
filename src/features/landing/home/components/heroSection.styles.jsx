import styled from "styled-components";
import Heading from "../../../../shared/components/typography/Heading";
import Link from "../../../../shared/components/ui/ExternalLink";
import Row from "../../../../shared/components/layout/Row";

export const StyledHeroSectionBackground = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);

  background-image: url("src/assets/images/ui/PRHeroSection.gif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-height: 87vh;
`;

export const StyledHeroSectionContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: var(--gap-xl);
  max-width: 90%;
  left: 60%;
  transform: translateX(+3%);
  margin: 0 auto;
  padding-top: 2.5rem;
`;

export const StyledHeroHeadingRow = styled(Row)`
  gap: var(--gap-md);

  @media (max-width: 1100px) {
    gap: 0;
  }
`;

export const StyledHeroHeading = styled(Heading)`
  font-size: 3.5rem;
  line-height: var(--line-height-4xl);

  @media (max-width: 1100px) {
    font-size: var(--font-size-3xl);
  }
`;

export const StyledHeroPeriod = styled.span`
  position: relative;
  top: 5px;
  right: 5px;
`;

export const StyledHeroLogin = styled(Link)`
  transition: all 0.3s;
  &:hover {
    text-shadow: var(--text-shadow-md) var(--color-light-0);
    /* color: red; */
  }
`;

export const StyledHeroButtons = styled(Row)`
  @media (max-width: 500px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
