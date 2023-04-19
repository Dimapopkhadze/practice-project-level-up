import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  PanelContainer,
  PanelLayout,
  PaperStyled,
} from "../../Styles/PanelStyles";
import CustomTable from "./CustomTable";
type leaderboardData = {
  number: number;
  voucher: string;
  prize: string;
};

const FirstPanel = () => {
  const leaderboard: leaderboardData[] = [
    { number: 1, voucher: "-", prize: "aasd" },
    { number: 1, voucher: "-", prize: "aasd" },
    { number: 1, voucher: "-", prize: "aasd" },
  ];
  return (
    <PanelLayout>
      <h3>1 ₾ რეიკი = 1 ქულას</h3>
      <PanelContainer>
        <div className="title-with-icon">
          <h3>ჰოლდემის TOP 20 ლიდერბორდი </h3>
          <img src="/img/example-icon.png" alt="example-icon"></img>
        </div>
        <PaperStyled>
          <CustomTable rows={leaderboard}></CustomTable>
        </PaperStyled>
      </PanelContainer>
    </PanelLayout>
  );
};
export default FirstPanel;
