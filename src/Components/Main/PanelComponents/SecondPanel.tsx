import {
  PanelComponent,
  PanelLayout,
  PanelContainer,
  FlexContainer,
  Time,
  StyledButton,
  FlexComponent,
  PaperStyled,
  StyledDiv,
  FlexBox,
} from "../../Styles/SecondPanelStyles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import CustomTableRow from "./CustomTableRow";

const SecondPanel = () => {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

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
        <h3>ტურნირები და სატელიტები</h3>
        <PanelContainer>
          <h4>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h4>
          {!responsive && (
            <FlexContainer>
              <img src="/img/promo-left-img.png" alt="promo-left"></img>
              <FlexComponent>
                <Time>
                  <AccessTimeIcon
                    sx={{
                      background: "#ef5a21",
                      borderRadius: "12px",
                      padding: "8px",
                    }}
                  />
                  <div>19:00 / 19:30 / 20:00</div>
                </Time>
                <span>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</span>
                <span>
                  ტურნირების სრული განრიგის სანახავად გადადი
                  <br /> პოკერის ლობიში
                </span>

                <StyledButton>პოკერის ლობი</StyledButton>
              </FlexComponent>
              <img src="/img/promo-right-img.png" alt="promo-right"></img>
            </FlexContainer>
          )}
          {responsive && (
            <FlexContainer>
              <img src="/img/promo-left-img-m.png" alt="promo-left-m" />
              <Time>
                <AccessTimeIcon
                  sx={{
                    background: "#ef5a21",
                    borderRadius: "8px",
                    padding: "4px",
                  }}
                />
                <div>19:00 / 19:30 / 20:00</div>
              </Time>
              <img src="/img/promo-right-img-m.png" alt="promo-right-m" />
            </FlexContainer>
          )}
        </PanelContainer>
        {responsive && (
          <div style={{ margin: "0px 10px" }}>
            <span>
              * ყველა ტურნირზე მოხვედრა შესაძლებელია <br />0 ლარიდან. <br />
            </span>
            <br />
            <span>
              ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
            </span>
            <br />

            <StyledButton>პოკერის ლობი</StyledButton>
          </div>
        )}
      </PanelComponent>
      <PanelComponent className="border-top">
        <h3>მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით</h3>
        <PanelContainer>
          <div className="title-with-icon">
            <div>
              <span>ქულათა დაგროვების მექანიკა</span>
              <img src="/img/mechanic-icon.png" alt="example-icon"></img>
            </div>
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
                  <p>ტექნიკის მაღაზიის ვაუჩერ</p>
                </div>
              </StyledDiv>
            </Stack>
          </PaperStyled>
        </PanelContainer>
      </PanelComponent>
      <PanelComponent>
        <PanelContainer>
          <h3>ყოველდღიური ტურნირები და სატელიტები</h3>
          {!responsive && (
            <FlexBox>
              <FlexBox className="row">
                <FlexBox className="background-1">
                  <FlexBox className="row small">
                    <span>Holdem Highrollers</span>
                    <span>ბაი-ინი - 550 ₾</span>
                  </FlexBox>
                  <FlexBox className="row small">
                    <span className="prize">50 000 ₾</span>
                    <span className="date-small">27 აპრილი</span>
                  </FlexBox>
                </FlexBox>
                <FlexBox className="background-2">
                  <FlexBox className="row small">
                    <span>Omaha Highrollers</span>
                    <span>ბაი-ინი - 550 ₾</span>
                  </FlexBox>
                  <FlexBox className="row small">
                    <span className="prize">50 000 ₾</span>
                    <span className="date-small">27 აპრილი</span>
                  </FlexBox>
                </FlexBox>
              </FlexBox>
              <FlexBox className="background-3">
                <FlexBox className="row big">
                  <span>Main Events</span>
                  <span>ბაი-ინი - 550 ₾</span>
                </FlexBox>
                <FlexBox className="row big">
                  <span className="prize">150 000 ₾</span>
                  <span className="date-big">27 აპრილი</span>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          )}
          {responsive && (
            <FlexBox>
              <FlexBox className="background-1-m">
                <FlexBox className="row small">
                  <span>Omaha Highrollers</span>
                  <span>ბაი-ინი - XXX₾</span>
                </FlexBox>
                <FlexBox className="row small">
                  <span className="prize">40 000 ₾</span>
                  <span className="date-small">27 დეკემბერი</span>
                </FlexBox>
              </FlexBox>
              <FlexBox className="background-1-m">
                <FlexBox className="row small">
                  <span>Omaha Highrollers</span>
                  <span>ბაი-ინი - XXX₾</span>
                </FlexBox>
                <FlexBox className="row small">
                  <span className="prize">40 000 ₾</span>
                  <span className="date-small">27 დეკემბერი</span>
                </FlexBox>
              </FlexBox>
              <FlexBox className="background-2-m">
                <FlexBox className="row small">
                  <span>Omaha Highrollers</span>
                  <span>ბაი-ინი - XXX₾</span>
                </FlexBox>
                <FlexBox className="row small">
                  <span className="prize">40 000 ₾</span>
                  <span className="date-small">27 დეკემბერი</span>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          )}
          <span className="span">
            * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
            The
            <br />
            Lord of the Rings ტურტირზე, იბრძოლებენ The Fesitval in Malta-ს
            საგზურის მისაღებად
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
export default SecondPanel;
