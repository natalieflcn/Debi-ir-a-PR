import styled, { css } from "styled-components";

const variations = {
  center: css`
    display: flex;
    text-align: center;
    align-items: center;
    & > button {
      align-self: stretch;
    }
  `,
  stretch: css`
    flex-grow: 1;
    align-self: stretch;
  `,
};

const DashboardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-md);
  background-color: var(--color-light-0);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  color: var(--color-dark-200);
  box-shadow: var(--box-shadow-md);
  flex: 1;
  line-height: var(--line-height-sm) ${({ $flex }) => $flex};
  ${({ $height }) => $height};
  ${({ $variation }) => variations[$variation]};
`;

export default DashboardItem;
