import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const PanelLayout = styled("div")`
  .border-top {
    position: relative;
  }
  .border-top::before {
    content: "";
    display: block;
    position: absolute;
    left: 40%;
    right: 0;
    top: 0;
    height: 5px;
    width: 20%;
    background-color: #ef5a21;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(239, 90, 33, 0.4);
  }

  .footer-span {
    font-size: 13px;
  }
`;
export const PanelComponent = styled(Paper)`
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

  padding: 10px;
  button {
    border: none;
    background-color: transparent;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    color: #ef5a21;
    font-size: 13px;
  }
  .title-with-icon {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 15px 10px;
    font-weight: bold;
  }
`;
export const PaperStyled = styled(Paper)`
  background: #25292b;
  margin: 0px 10px 30px;
  color: #717171;

  .border-left {
    position: relative;
  }
  .border-left::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 25%;
    bottom: 0;
    width: 5px;
    height: 50%;
    background-color: #ef5a21;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(239, 90, 33, 0.4);
  }
`;

export const StyledDiv = styled("div")`
  background: #202324;
  color: white;
  border-radius: 15px;
  padding: 10px;
  width: 90%;
  text-align: start;

  div {
    display: flex;
    padding: 0 10px;
    gap: 15px;
  }
  @media (max-width: 600px) {
    padding: 10px 0px;
    font-size: 13px;
  }
`;
