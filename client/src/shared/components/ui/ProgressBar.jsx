import styled from "styled-components";

const OuterBar = styled.div`
  height: 2rem;
  width: 100%;
  background-color: var(--color-light-100);
  border-radius: var(--border-radius-lg);
  padding: 0.25rem 0.25rem;
  align-self: center;
`;

const InnerBar = styled.div`
  height: 100%;

  background-color: var(--color-red-200);
  width: ${({ $width }) => $width};
  border-radius: inherit;
  transition: width 0.3s ease-in-out;
`;

const CompletedNumber = styled.span`
  color: var(--color-light-0);
  text-shadow: 1px 1px 1px var(--color-dark-200);
  padding: 1rem;
  font-weight: var(--font-weight-boldest);

  @media (max-width: 450px) {
    font-size: var(--font-size-xs);
    padding: 1rem 0.5rem;
  }
`;

const ProgressBar = ({ completed, label = true }) => {
  return (
    <OuterBar>
      <InnerBar $width={`${completed}%`}>
        <CompletedNumber>{label && `${completed}%`}</CompletedNumber>
      </InnerBar>
    </OuterBar>
  );
};

export default ProgressBar;
