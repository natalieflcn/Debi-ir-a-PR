import styled from "styled-components";

const defaultTheme = {
  boxShadow: "var(--box-shadow-offset-md)",
  shadowColor: "var(--color-dark-200)",
  headerBackground: "var(--color-dark-100)",
  headerColor: "var(--color-light-200)",
  headerBackgroundAlt: "var(--color-dark-0)",
  headerColorAlt: "var(--color-light-100)",
  cellBackground: "var(--color-light-200)",
  cellBackgroundAlt: "var(--color-light-100)",
  borderColor: "var(--color-dark-0)",
};

const StyledTable = styled.table`
  width: 99%;
  justify-items: center;
  justify-self: center;
  overflow: hidden;
  table-layout: fixed;
  text-align: center;
  border-radius: var(--border-radius-lg);
  box-shadow: ${({ $theme }) => `${$theme.boxShadow} ${$theme.shadowColor}}`};
`;

const StyledTableHeading = styled.th`
  padding: 1rem;
  font-weight: var(--font-weight-boldest);
  font-size: var(--font-size-md);
  font-family: Museo;
  letter-spacing: var(--letter-spacing-museo-tight);
  text-transform: uppercase;

  background-color: ${({ $theme }) => $theme.headerBackground};
  color: ${({ $theme }) => $theme.headerColor};
  border-bottom: 2px dashed ${({ $theme }) => $theme.borderColor};

  &:nth-child(even) {
    background-color: ${({ $theme }) => $theme.headerBackgroundAlt};
    color: ${({ $theme }) => $theme.headerColorAlt};
  }
`;

const StyledTableData = styled.td`
  padding: 0.75rem;
  background-color: ${({ $theme }) => $theme.cellBackground};
  border-bottom: 1px dashed ${({ $theme }) => $theme.borderColor};

  &:nth-child(even) {
    background-color: ${({ $theme }) => $theme.cellBackgroundAlt};
  }
`;

function Table({ columns, rows, $theme = defaultTheme }) {
  return (
    <StyledTable $theme={$theme}>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <StyledTableHeading key={i} $theme={$theme}>
              {col.heading}
            </StyledTableHeading>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <StyledTableData key={col.id} $theme={$theme}>
                {row[col.id]}
              </StyledTableData>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
