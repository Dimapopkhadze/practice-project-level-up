import styled from "@emotion/styled";
import { Dialog, Paper, Tab, Tabs, Box } from "@mui/material";

export const DialogStyled = styled(Dialog)`
  display: flex;
  flex-direction: column;
`;
export const BoxStyled = styled(Box)`
  margin: 0px 35px;
  .p {
    margin-bottom: 40px;
  }
  @media (max-width: 600px) {
    margin: 0px 20px;
  }
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
  border-radius: 10px;
  h3 {
    line-height: 1.5;
  }
  h5 {
    font-size: 12px;
    font-weight: bold;
  }
  p {
    font-size: 10px;
  }
  &.Mui-selected {
    color: #f4f4f4;
    background: #ef5a21;
    h5 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    &.Mui-selected {
      h5 {
        font-size: 12px;
      }
      p {
        font-size: 10px;
      }
    }
  }
`;
export const TabsStyled = styled(Tabs)`
  background: #2c3234;
  border-radius: 10px;
  margin-bottom: 40px;
`;
