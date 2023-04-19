import { Table, TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
export const TableStyled = styled(Table)`
  border-collapse: seperate;
  border-spacing: 0px 10px;
`;
export const TableHeadCellStyled = styled(TableCell)`
  background: #25292b;
  margin: 0px 10px;
  color: #717171;
  text-align: center;
  border-bottom-color: #25292b;
`;
export const TableBodyCellStyled = styled(TableCell)`
  color: white;
  text-align: center;
  border-bottom-color: #25292b;
  border-radius: 20px;
`;
export const TableRowStyled = styled(TableRow)`
  border-radius: 10px;
  background-color: black;
`;
