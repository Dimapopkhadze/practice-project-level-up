import styled from "@emotion/styled";
import { Dialog, Paper, Tab, Tabs, Typography } from "@mui/material";

export const DialogStyled = styled(Dialog)`
  display: flex;

  flex-direction: column;
`;
export const PaperStyled = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: #1c1d1e;
  color: #f4f4f4;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const TabStyled = styled(Tab)`
  background: #2c3234;
  text-transform: none;
  color: #f4f4f4;
  border-radius: 20px;
  padding: 20px;
  &.Mui-selected {
    color: #f4f4f4;
    background: #ef5a21;
  }
`;
export const TabsStyled = styled(Tabs)`
  background: #2c3234;
  border-radius: 20px;
  margin: 0px 30px;
`;
