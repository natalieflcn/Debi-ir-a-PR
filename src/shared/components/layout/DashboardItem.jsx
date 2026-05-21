import styled, { css } from "styled-components";

const variations = {
  center: css`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: var(--gap-md);
  `,
};

const DashboardItem = styled.div`
  /* display: flex;
  flex-direction: column; */
  background-color: var(--color-light-0);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  color: var(--color-dark-200);
  /* align-items: ${({ $align }) => $align};
  text-align: ${({ $align }) => $align}; */

  ${({ $variation }) => variations[$variation]}
`;

export default DashboardItem;
