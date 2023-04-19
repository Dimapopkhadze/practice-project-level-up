import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
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
    <TableStyled stickyHeader>
      <TableHead>
        <TableRow>
          <TableHeadCellStyled>ადგილი</TableHeadCellStyled>
          <TableHeadCellStyled>ვაუჩერი</TableHeadCellStyled>
          <TableHeadCellStyled>პრიზი</TableHeadCellStyled>
        </TableRow>
      </TableHead>
      <TableBody sx={{ background: "#25292b" }}>
        {rows.map((row) => (
          <TableRowStyled>
            <TableBodyCellStyled>{row.number}</TableBodyCellStyled>
            <TableBodyCellStyled>{row.voucher}</TableBodyCellStyled>
            <TableBodyCellStyled>{row.prize}</TableBodyCellStyled>
          </TableRowStyled>
        ))}
      </TableBody>
    </TableStyled>
  );
};
export default CustomTable;
