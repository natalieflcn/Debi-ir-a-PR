import styled from "styled-components";

const StyledTable = styled.table``;

// function Table({ tableData }) {

function Table({ columns, rows }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i}>{col.heading}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
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
