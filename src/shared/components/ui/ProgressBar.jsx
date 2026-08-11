import styled from "styled-components";

const OuterBar = styled.div`
  /* position: relative; */
  height: 2rem;
  width: 100%;
  background-color: var(--color-light-100);
  border-radius: var(--border-radius-lg);
  padding: 0.25rem 0.25rem;
  align-self: center;
`;

const InnerBar = styled.div`
  height: 100%;

  /* height: 75%; */
  /* top: 10%; */

  background-color: var(--color-red-200);
  width: ${({ $width }) => $width};
  border-radius: inherit;
  transition: width 0.3s ease-in-out;
`;

const CompletedNumber = styled.span`
  color: var(--color-light-0);
  padding: 1rem;
  font-weight: var(--font-weight-boldest);
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
