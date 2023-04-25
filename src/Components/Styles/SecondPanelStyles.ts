import styled from "@emotion/styled";
import { Paper, Button } from "@mui/material";

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
  .span {
    margin: 20px 5px;
    font-size: 14px;
  }

  .title-with-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    div {
      display: flex;
      align-items: center;
      background: #1e2122;
      gap: 25px;

      border-radius: 30px;
      span {
        font-weight: bold;
        font-size: 14px;
        padding-left: 20px;
      }
      img: {
        width: 150%;
      }
    }
  }
  .link {
    color: #ef5a21;
    text-decoration: underline;
  }
  .row {
    width:100%;
    flex-direction: row;
    overflow:hidden;

    white-space:nowrap;


  
  }
  .background-1 {
    
  width:100%;
    height: 104px;
    background-image: url("/img/tournament-bg.png");
    background-repeat:no-repeat;
  }
  .background-2 {
    width:100%;
    height: 104px;
    background-repeat:no-repeat;
    background-image: url("/img/tournament-bg2.png");
  }
  .background-3 {
    width: 100%;
    height: 104px;
    background-image: url("/img/main-bg.png");
  }
  .small {
    width: 65%;

    justify-content: space-between;
 
  }
  .big {
    width: 35%;
    justify-content: space-between;
  }
  .date-small {
    margin-right: 15px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 3px 10px;
    background: #b78648;
  }
  .date-big {
    background: #d7c860;
    margin-right: 15px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 0px 10px;
  }
  .prize {
    color: #ffbe00;
    font-weight: bold;
    font-size: 24px;
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
   
  @media (max-width: 600px) {
    .background-1-m {
      width: 343px;
      height: 85px;
      display: flex;
      background-image: url("/img/tournament-bg-m.png");
    }
    .background-2-m {
      width: 343px;
      height: 85px;
      background-image: url("/img/main-bg-sm.png");
    }
    .small {
      width: 80%;
      span {
        font-size: 16px;
      }
      .prize {
        font-size: 23px;
      }
      .date-small{
        padding
      }
    }
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

  .second-component {
    padding: 10px 35px;
  }
`;

export const SecondPanelComponent = styled(Paper)`
  background: #171718;
  border: 4px solid #25292b;
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
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    h3 {
      font-size: 15px;
    }
`;

export const FlexContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const FlexComponent = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin-bottom: 10px;
    font-size: 12px;
  }
}
`;
export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 0 10px;
`;
export const Time = styled("div")`
  display: flex;
  border: solid 3px #ef5a21;
  border-radius: 15px;
  box-shadow: 0 0 10px 5px rgba(239, 90, 33, 0.2);
  align-items: center;
  margin: 10px 0px 20px;

  gap: 5px;
  div {
    padding: 3px 6px 3px 0;
    font-weight: bold;
    font-size: 15px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
export const StyledButton = styled(Button)`
  background: #ef5a21;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  margin: 10px;
`;

export const PaperStyled = styled(Paper)`
  background: #25292b;
  margin: 0px 10px 30px;
  color: #717171;
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
