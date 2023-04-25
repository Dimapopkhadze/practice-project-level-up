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
  .second-component {
    padding: 0px 20px;
  }
  .img {
    border-radius: 15px;
    margin: 0 15px 15px 15px;
  }
  .h3 {
    font-weight: 800;
    margin: 0 20px 20px;
  }
    .header {
    background: #2c3234;
    padding: 16px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 10px;
  }
  .offer {
    display: flex;

    align-items: center;
    text-aling: center;
    background: #1c1d1e;
    border-radius: 10px;
    gap: 10px;
    padding: 10px 8px;
    margin: 5px;
    span {
      font-size: 13px;
    }
  }

  .span {
    margin: 20px 5px;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    .h3 {
      font-weight:200;
      font-size:14px;
   
    }
`;

export const PanelComponent = styled(Paper)`
  background: #2c3234;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;

export const PanelContainer = styled(Paper)`
  color: white;
  background: #171718;
  border-radius: 10px;
  margin: 3px 3px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  p {
    padding-bottom: 15px;
  }
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  margin: 0 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ListComponent = styled("div")`
  background: #25292b;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
`;
export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: start;
  background: #25292b;
  height: 100%;
  span {
    font-size: 13px;
    margin-left: 20px;
    display: block;
    padding: 10px;
    text-align: start;
  }
`;

export const CardComponent = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  div {
    padding: 20px 20px 5px;
    font-weight: bold;
  }
  img {
    align-self: flex-start;
    width: 64px;
    margin-right: 15px;
  }
`;
