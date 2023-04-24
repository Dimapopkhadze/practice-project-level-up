import styled from "@emotion/styled";
import { Accordion, Paper } from "@mui/material";

export const FooterContainer = styled("div")`
  margin: 20px 35px;
  h3 {
    margin-bottom: 35px;
  }

  @media (max-width: 600px) {
    margin: 0px 20px;
  }
`;

export const AccordionStyled = styled(Accordion)`
  margin: 20px 0;
  padding: 5px;
  color: white;
  background: #25292b;

  p {
    font-size: 18px;
  }
`;
export const StyledDiv = styled("div")`
  margin: 64px 0 64px 0;
  height: 250px;
  .slide {
    margin: 0 10px;
  }
  .partners__slider {
    margin: 0 -10px;
    width: 100%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  .img {
    width: 250px;
    border-radius: 5px;
    @media (max-width: 600px) {
      width: 160px;
    }
  }
`;
export const OfferBoxes = styled("div")`
  height: 241px;
  padding-top: 30px;
`;

export const OfferBox = styled(Paper)`
  gap: 64px;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 345px;
  height: 80%;
  background-color: #f8faff;
  box-shadow: 0px 4px 16px rgba(50, 111, 230, 0.15);
  border-radius: 24px;
  padding: 32px;
  h5 {
    font-style: normal;
    font-weight: 700;
    font-family: "FreeSans";
    font-size: 18px;
    line-height: 27px;
    text-transform: uppercase;
    color: #161c2d;
    margin-bottom: 8px;
    padding-top: 20px;
  }
 
  }
`;
