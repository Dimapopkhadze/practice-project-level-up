import { TableBody, TableHead, TableRow, TableContainer } from "@mui/material";
import {
  TableBodyCellStyled,
  TableHeadCellStyled,
  TableRowStyled,
  TableStyled,
} from "../../Styles/TableStyled";

type propsData = {
  rows: leaderboardData[];
};
type leaderboardData = {
  number: number;
  voucher: string;
  prize: string;
};

const CustomTable = ({ rows }: propsData) => {
  return (
    <TableContainer sx={{ maxHeight: 470 }}>
      <TableStyled stickyHeader>
        <TableHead>
          <TableRow>
            <TableHeadCellStyled style={{ textAlign: "left" }}>
              ადგილი
            </TableHeadCellStyled>
            <TableHeadCellStyled>ვაუჩერი</TableHeadCellStyled>
            <TableHeadCellStyled style={{ textAlign: "right" }}>
              პრიზი
            </TableHeadCellStyled>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "#25292b" }}>
          {rows.map((row) => (
            <TableRowStyled>
              <TableBodyCellStyled className="left">
                <div> {row.number}</div>
              </TableBodyCellStyled>
              <TableBodyCellStyled>{row.voucher}</TableBodyCellStyled>
              <TableBodyCellStyled className="right">
                {row.prize}
              </TableBodyCellStyled>
            </TableRowStyled>
          ))}
        </TableBody>
      </TableStyled>
    </TableContainer>
  );
};
export default CustomTable;
