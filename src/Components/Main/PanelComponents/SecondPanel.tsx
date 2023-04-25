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
  FlexBoxColumn,
  FlexBoxRow,
} from "../../Styles/SecondPanelStyles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import CustomTableRow from "./CustomTableRow";
import Banner from "./Banner";

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

  const BannersData = [
    {
      text1: "Holdem Highrollers",
      text2: "ბაი ინი- 550ლ",
      prize: "50 000 ₾",
      date: "27 აპრილი",
      backgroundImg: "/img/tournament-bg.png",
      backgroundImgMobile: "/img/tournament-bg-m.png",
      dateColor: { primary: "#b78648", secondary: "white" },
    },
    {
      text1: "Holdem Highrollers",
      text2: "ბაი ინი- 550ლ",
      prize: "50 000 ₾",
      date: "27 აპრილი",
      backgroundImg: "/img/tournament-bg.png",
      backgroundImgMobile: "/img/tournament-bg-m.png",
      dateColor: { primary: "#b78648", secondary: "white" },
    },
    {
      text1: "Holdem Highrollers",
      text2: "ბაი ინი- 550ლ",
      prize: "50 000 ₾",
      date: "27 აპრილი",
      backgroundImg: "/img/main-bg.png",
      backgroundImgMobile: "/img/main-bg-sm.png",
      dateColor: { primary: "#d7c860", secondary: "#094b3d" },
    },
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
          <span className="footer-span">
            {`*ლიდერბორდის შედეგები განახლდება `}
            <button>პოკერის ლობიში</button>
          </span>
          <span className="footer-span">
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </span>
        </PanelContainer>
      </PanelComponent>
      <PanelComponent>
        <PanelContainer>
          <h3>ყოველდღიური ტურნირები და სატელიტები</h3>

          <FlexBoxColumn>
            <FlexBoxRow>
              {BannersData.slice(0, 2).map((bannerObject, index) => {
                return <Banner key={index} info={bannerObject} />;
              })}
            </FlexBoxRow>
            <Banner isBigBanner info={BannersData[2]} />
          </FlexBoxColumn>

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
        <div>
          <h3>
            დამატებით შედგება, ქეშგეიმის, ტურნიტების და სპინ პოკერის <br />
            12 Side ლიდერბორდი
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
