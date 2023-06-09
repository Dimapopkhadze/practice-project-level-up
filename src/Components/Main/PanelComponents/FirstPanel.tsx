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
    { number: 1, voucher: "-", text: "A კატეგორიის საგზური" },
    { number: 2, voucher: "-", text: "A კატეგორიის საგზური" },
    { number: 3, voucher: "-", text: "A კატეგორიის საგზური" },
    { number: 4, voucher: "-", text: "A კატეგორიის საგზური" },
    { number: 5, voucher: "-", text: "A კატეგორიის საგზური" },
    { number: 6, voucher: "1500", text: "A კატეგორიის საგზური" },
    { number: 7, voucher: "-", text: "A კატეგორიის საგზური" },
    { number: 8, voucher: "-", text: "A კატეგორიის საგზური" },
    { number: 9, voucher: "-", text: "A კატეგორიის საგზური" },
  ];
  return (
    <PanelLayout>
      <PanelComponent className="border-top">
        <h3>1 ₾ რეიკი = 1 ქულას</h3>
        <PanelContainer>
          <div className="title-with-icon">
            <div>ჰოლდემის TOP 20 ლიდერბორდი </div>
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
                  <img src="/img/travel-icon-sm.png" alt="travel" />
                  <p>The Festival in Malta-ს საგზური</p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/ticket-icon-sm.png" alt="ticket" />
                  <p>
                    სპეციალური ტურნირის "Cashgame
                    <span> Sharks" ბილეთი, სადაც გათამაშდება</span>
                    <span> The Festival in Malta-ს საგზური</span>
                  </p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/voucher.png" alt="voucher" />
                  <p>ტექნიკის მაღაზიის ვაუჩერი</p>
                </div>
              </StyledDiv>
            </Stack>
          </PaperStyled>
          <div className="title-with-icon">
            <div>TOP 20 ლიდერბორდი ჰოლდემში </div>
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
                  <img src="/img/travel-icon-sm.png" alt="travel" />
                  <p>The Festival in Malta-ს საგზური</p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/ticket-icon-sm.png" alt="ticket" />
                  <p>
                    სპეციალური ტურნირის "Cashgame Sharks" ბილეთი, სადაც
                    გათამაშდება The Festival in Malta-ს საგზური
                  </p>
                </div>
              </StyledDiv>
              <StyledDiv className="border-left">
                <div>
                  <img src="/img/voucher.png" alt="voucher" />
                  <p>ტექნიკის მაღაზიის ვაუჩერი</p>
                </div>
              </StyledDiv>
            </Stack>
          </PaperStyled>
          <span className="footer-span">
            {`* ლიდერბორდის შედეგები განახლდება `}
            <button>პოკერის ლობიში</button>
          </span>
        </PanelContainer>
      </PanelComponent>
      <PanelComponent className="border-top">
        <div>
          <h3>
            დამატებით შედგება, ქეშგეიმის, ტურნიტების და სპინ პოკერის
            <br /> 12 Side ლიდერბორდი
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
