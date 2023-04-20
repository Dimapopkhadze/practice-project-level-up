import { Table, TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
export const TableStyled = styled(Table)`
  border-spacing: 0px 10px;
  width: 95%;
  margin: auto;
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
  border-bottom: solid 2px #2c3234;
  border-top: solid 3px #2c3234;
  font-size: 15px;
`;

export const TableRowStyled = styled(TableRow)`
  background-color: #1e2122;
  .left {
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    padding-left: 30px;
    text-align: left;
    border-left: solid 2px #2c3234;
    div {
      background: #2c3234;

      width: 25px;
      text-align: center;
      border-radius: 70px;
    }
  }
  .right {
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    padding-right: 30px;

    border-right: solid 2px #2c3234;
  }
`;
