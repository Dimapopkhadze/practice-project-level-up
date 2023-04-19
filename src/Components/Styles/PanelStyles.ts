import styled from "@emotion/styled";
import { Paper, Table, TableCell, TableHead } from "@mui/material";

export const PanelLayout = styled(Paper)`
  background: #2c3234;
  border-radius: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;
export const PanelContainer = styled(Paper)`
  color: white;
  background: #171718;
  border-radius: 15px;
  margin: 3px 3px;
  .title-with-icon {
    display: flex;
    justify-content: center;
    h3 {
      padding-right: 15px;
    }
  }
`;
export const PaperStyled = styled(Paper)`
  background: #25292b;
  margin: 0px 10px;
  color: #717171;
`;
