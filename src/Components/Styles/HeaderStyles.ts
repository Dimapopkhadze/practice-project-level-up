import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const DivStyled = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    img {
      width: 20px;
    }
    margin-left: 20px;
  }
`;

export const ButtonStyledLeft = styled(Button)`
  text-transform: none;
  color: white;
`;
export const ButtonStyledRight = styled(Button)`
  text-transform: none;
  background: #ef5a21;
  color: white;
  margin: 10px 20px;
`;
export const FloatingDiv = styled("div")`
  position: fixed;
  width: 895px;
  display: flex;
  z-index: 3;
  @media (max-width: 600px) {
    width: 100%;
    position: static;
  }
`;

export const DivLeft = styled("div")`
  position: absolute;
  left: 0;
  margin: 20px;
  display: flex;
  gap: 10px;
  border-radius: 20px;
  background: #25292b;
  padding: 5px 10px;
  .slots {
    padding: 0 10px;
    background: #44494b;
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
  }
  @media (max-width: 600px) {
    background: transparent;
    margin: 20px 20px 0;
    position: static;
    padding: 0;
  }
`;
export const DivRight = styled("div")`
  position: absolute;
  right: 0;
  margin: 20px;
  background: #25292b;
  border-radius: 40px;
  @media (max-width: 600px) {
    display: none;
  }
`;
