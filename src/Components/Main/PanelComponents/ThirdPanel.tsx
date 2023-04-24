import {
  FlexBox,
  ListComponent,
  PanelComponent,
  PanelLayout,
  PanelContainer,
  CardComponent,
  CardContainer,
} from "../../Styles/ThirdPanelStyles";
import CustomTableRow from "./CustomTableRow";

const ThirdPanel = () => {
  const leaderboard = [
    { number: 1, text: "aasd" },
    { number: 2, text: "aasd" },

    { number: 3, text: "aaadlkasjdlkasjdlka" },
    { number: 4, text: "aaadlkasjdlkasjdlka" },
    { number: 5, text: "aaadlkasjdlkasjdlka" },
    { number: 6, text: "aaadlkasjdlkasjdlka" },
    { number: 7, text: "aaadlkasjdlkasjdlka" },
    { number: 8, text: "aaadlkasjdlkasjdlka" },
    { number: 9, text: "aaadlkasjdlkasjdlka" },
  ];
  const TicketOffer = [
    {
      title: "A კატეგორიის საგზურში შედის",
      offers: [
        { img: "final-item-ticket-icon.png", text: "ორმხრივი ავიაბილეთები" },
        {
          img: "final-item-event-icon.png",
          text: "The Festival In Malta-ს მეინ ივენთის ბაი-ინი",
        },
        {
          img: "final-item-event-icon.png",
          text: "Holdem ან Omaha  ჰაიროლერ ტურნირის ბაი-ინი",
        },
        {
          img: "final-item-hotel-icon.png",
          text: "სასტუმრო Golden Tulip Vivaldi Hotel",
        },
        { img: "final-item-money-icon.png", text: "$500 სახარჯი ფული" },
      ],
    },
    {
      title: "A კატეგორიის საგზურში შედის",
      offers: [
        { img: "final-item-ticket-icon.png", text: "ორმხრივი ავიაბილეთები" },
        {
          img: "final-item-event-icon.png",
          text: "The Festival In Malta-ს მეინ ივენთის ბაი-ინი",
        },
        {
          img: "final-item-event-icon.png",
          text: "Holdem ან Omaha  ჰაიროლერ ტურნირის ბაი-ინი",
        },
        {
          img: "final-item-hotel-icon.png",
          text: "სასტუმრო Golden Tulip Vivaldi Hotel",
        },
        { img: "final-item-money-icon.png", text: "$500 სახარჯი ფული" },
      ],
    },
    {
      title: "A კატეგორიის საგზურში შედის",
      offers: [
        { img: "final-item-ticket-icon.png", text: "ორმხრივი ავიაბილეთები" },
        {
          img: "final-item-event-icon.png",
          text: "The Festival In Malta-ს მეინ ივენთის ბაი-ინი",
        },
        {
          img: "final-item-hotel-icon.png",
          text: "სასტუმრო Golden Tulip Vivaldi Hotel",
        },
        { img: "final-item-money-icon.png", text: "$500 სახარჯი ფული" },
      ],
    },
  ];

  const TicketCount = [
    [
      {
        title: '"Cashgame Highrollers"',
        img: "poker-item-1-ticket-icon.png",
        text: [{ p: "1 საგზური" }],
      },
      {
        title: '"Cashgame Grinders"',
        img: "poker-item-1-ticket-icon.png",
        text: [{ p: "1 საგზური" }],
      },
      {
        title: '"Tournament Sharks"',
        img: "poker-item-1-ticket-icon.png",
        text: [{ p: "1 საგზური" }],
      },
    ],
    [
      {
        title: '"The Festival in Malta, GTD"',
        img: "poker-item-2-ticket-icon.png",
        text: [
          { p: "A კატეგორიის 1 საგზური" },
          { p: "B კატეგორიის 1 საგზური" },
          {
            p: "ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიე მსურველს 165₾ ბაი-ინის გადახდით",
          },
        ],
      },
      {
        title: '"The Lord of the Rings"',
        img: "poker-item-1-ticket-icon.png",
        text: [
          { p: "C კატეგორიის 1 საგზური" },
          {
            p: "ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით",
          },
        ],
      },
    ],
  ];
  return (
    <PanelLayout>
      <PanelComponent>
        <PanelContainer>
          <img className="img" src="/img/final-info-img.jpg" />
          <span className="h3">გაემგზავრე THE FESTIVAL IN MALTA-ზე! </span>
          <span className="h3">
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს
            <br />
            დაუვიწყარი მოგზაურობის შანსს.
          </span>
          <FlexBox>
            <PanelComponent className="border-left">
              <div className="second-component">
                <p>15-დან 21 მაისის ჩათვლით მალტა ფესტივალს უმასპინძლებს</p>
              </div>
            </PanelComponent>
          </FlexBox>
          <FlexBox style={{ margin: "0 20px" }}>
            {TicketOffer.map((singleTable) => (
              <ListComponent className="border-top">
                <div className="header">{singleTable.title}</div>

                {singleTable.offers.map((singleOffer) => (
                  <div className="offer">
                    <img src={`/img/${singleOffer.img}`} />
                    <span>{singleOffer.text}</span>
                  </div>
                ))}
              </ListComponent>
            ))}
          </FlexBox>
        </PanelContainer>
      </PanelComponent>
      <PanelComponent>
        <h3>მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე</h3>

        <PanelContainer>
          <FlexBox style={{ margin: "0 20px" }}>
            {TicketCount.map((el) => (
              <FlexBox style={{ flexDirection: "column", width: "100%" }}>
                {el.map((singleCard) => (
                  <CardContainer>
                    <CardComponent>
                      <div>{singleCard.title}</div>
                      <img src={`/img/${singleCard.img}`}></img>
                    </CardComponent>
                    {singleCard.text.map((text) => (
                      <span>{text.p}</span>
                    ))}
                  </CardContainer>
                ))}
              </FlexBox>
            ))}
          </FlexBox>
          <span className="span">
            * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
            The
            <br />
            Lord of the Rings ტურტირზე, იბრძოლებენ The Fesitval in Malta-ს
            საგზურის მისაღებად
          </span>
        </PanelContainer>
      </PanelComponent>

      <PanelComponent>
        <h3>მისტიური გასაღები</h3>
        <PanelContainer>
          <p>
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებემ საიდუმლო გასაღებს
          </p>
          <CustomTableRow leaderboard={leaderboard}></CustomTableRow>
        </PanelContainer>
      </PanelComponent>
    </PanelLayout>
  );
};

export default ThirdPanel;
