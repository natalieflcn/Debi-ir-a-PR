import styled from "styled-components";

const StyledTable = styled.table`
  width: 99%;
  justify-self: center;
  justify-items: center;
  table-layout: fixed;
  text-align: center;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1rem;

  box-shadow: 2px 2px 3px var(--color-yellow-300);
  tbody tr:last-child td {
    border-bottom: none;
  }
`;

const StyledTableHeading = styled.th`
  padding: 1rem;
  text-transform: uppercase;

  border-bottom: 2px dashed var(--color-yellow-300);
  font-weight: bold;
  font-size: 1.5rem;
  font-family: NimbusSans;
  color: ${({ $headingColor }) => `var(${$headingColor})`};

  background-color: var(--color-yellow-100);
  &:nth-child(even) {
    background-color: var(--color-light-100);
  }
`;

const StyledTableData = styled.td`
  padding: 0.75rem;
  border-bottom: 1px dashed var(--color-yellow-300);
  background-color: var(--color-yellow-0);

  &:nth-child(even) {
    background-color: var(--color-light-0);
  }
`;
// function Table({ tableData }) {

function Table({ columns, rows }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <StyledTableHeading key={i} $headingColor={col.headingColor}>
              {col.heading}
            </StyledTableHeading>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <StyledTableData key={col.key}>{row[col.key]}</StyledTableData>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
// data structure
// array - 2 indeces
// array[0] - array of tableHeadings
// array[1] - data, array of objects
// objects: {spanish, english}
