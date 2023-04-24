import { Stack } from "@mui/material";
import {
  PanelContainer,
  PanelComponent,
  PaperStyled,
  StyledDiv,
} from "../../Styles/FirstPanelStyles";
import { PanelLayout } from "../../Styles/FirstPanelStyles";
import CustomTableRow from "./CustomTableRow";

const FirstPanel = () => {
  const leaderboard = [
    { number: 1, voucher: "-", text: "aasd" },
    { number: 2, voucher: "-", text: "aasd" },

    { number: 3, voucher: "-", text: "aaadlkasjdlkasjdlka" },
    { number: 4, voucher: "-", text: "aaadlkasjdlkasjdlka" },
    { number: 5, voucher: "-", text: "aaadlkasjdlkasjdlka" },
    { number: 6, voucher: "-", text: "aaadlkasjdlkasjdlka" },
    { number: 7, voucher: "-", text: "aaadlkasjdlkasjdlka" },
    { number: 8, voucher: "-", text: "aaadlkasjdlkasjdlka" },
    { number: 9, voucher: "-", text: "aaadlkasjdlkasjdlka" },
  ];
  return (
    <PanelLayout>
      <PanelComponent className="border-top">
        <h3>1 ₾ რეიკი = 1 ქულას</h3>
        <PanelContainer>
          <div className="title-with-icon">
            <h3>ჰოლდემის TOP 20 ლიდერბორდი </h3>
            <img src="/img/example-icon.png" alt="example-icon"></img>
          </div>
          <PaperStyled>
            <CustomTableRow leaderboard={leaderboard}></CustomTableRow>
          </PaperStyled>
          <PaperStyled>
            <Stack
              spacing={3}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0",
              }}
            >
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/travel-icon-sm.png" />
                  <p>The Festival in Malta-ს საგზური</p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/ticket-icon-sm.png" />
                  <p>
                    სპეციალური ტურნირის "Cashgame
                    <span> Sharks" ბილეთი, სადაც გათამაშდება</span>
                    <span> The Festival in Malta-ს საგზური</span>
                  </p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/ticket-icon-sm.png" />
                  <p>The Festival in Malta-ს საგზური</p>
                </div>
              </StyledDiv>
            </Stack>
          </PaperStyled>
          <div className="title-with-icon">
            <h3>TOP 20 ლიდერბორდი ჰოლდემში </h3>
            <img src="/img/example-icon.png" alt="example-icon"></img>
          </div>
          <PaperStyled>
            <CustomTableRow leaderboard={leaderboard}></CustomTableRow>
          </PaperStyled>
          <PaperStyled>
            <Stack
              spacing={3}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0",
              }}
            >
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/travel-icon-sm.png" />
                  <p>The Festival in Malta-ს საგზური</p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/ticket-icon-sm.png" />
                  <p>
                    სპეციალური ტურნირის "Cashgame Sharks" ბილეთი, სადაც
                    გათამაშდება The Festival in Malta-ს საგზური
                  </p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/ticket-icon-sm.png" />
                  <p>The Festival in Malta-ს საგზური</p>
                </div>
              </StyledDiv>
            </Stack>
          </PaperStyled>
          <span>
            {`*ლიდერბორდის შედეგები განახლდება `}
            <a href="" className="link">
              პოკერის ლობიში
            </a>
          </span>
        </PanelContainer>
      </PanelComponent>
      <PanelComponent className="border-top">
        <div className="second-component">
          <h3>
            დამატებით შედგება, ქეშგეიმის, ტურნიტების და სპინ პოკერის 12 Side
            ლიდერბორდი
          </h3>
          <p>
            * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის
            ლობიში
          </p>
        </div>
      </PanelComponent>
    </PanelLayout>
  );
};
export default FirstPanel;
