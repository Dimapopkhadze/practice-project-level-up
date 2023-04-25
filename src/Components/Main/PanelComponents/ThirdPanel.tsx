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
    { number: 1, text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი" },
    { number: 2, text: "სპეციალური ტურნირი Cashgames Sharks II ადგილი" },
    { number: 3, text: "სპეციალური ტურნირი Tournament Sharks II ადგილი" },
    { number: 4, text: "სპეც. ტურნირი Tournament Sharks II ადგილი" },
    { number: 5, text: "Holdem Grinders ლიდერბორდის გამარჯვებული" },
    { number: 6, text: "ქეშგეიმ Grinders ლიდერბორდის გამარჯვებული" },
    { number: 7, text: "სპეც. ტურნირი Tournament Sharks II ადგილი" },
    { number: 8, text: "სპეციალური ტურნირი Cashgame Sharks II ადგილი" },
    { number: 9, text: "სპეციალური ტურნირი Cashgames Sharks II ადგილი" },
  ];
  const TicketOffer = [
    {
      id: 1,
      title: "A კატეგორიის საგზურში შედის",
      offers: [
        {
          img: "final-item-ticket-icon.png",
          text: "ორმხრივი ავიაბილეთები",
          id: 1,
        },
        {
          img: "final-item-event-icon.png",
          text: "The Festival In Malta-ს მეინ ივენთის ბაი-ინი",
          id: 2,
        },
        {
          img: "final-item-event-icon.png",
          text: "Holdem ან Omaha  ჰაიროლერ ტურნირის ბაი-ინი",
          id: 3,
        },
        {
          img: "final-item-hotel-icon.png",
          text: "სასტუმრო Golden Tulip Vivaldi Hotel",
          id: 4,
        },
        { img: "final-item-money-icon.png", text: "$500 სახარჯი ფული", id: 5 },
      ],
    },
    {
      id: 2,
      title: "A კატეგორიის საგზურში შედის",
      offers: [
        {
          img: "final-item-ticket-icon.png",
          text: "ორმხრივი ავიაბილეთები",
          id: 1,
        },
        {
          id: 2,
          img: "final-item-event-icon.png",
          text: "The Festival In Malta-ს მეინ ივენთის ბაი-ინი",
        },
        {
          id: 3,
          img: "final-item-event-icon.png",
          text: "Holdem ან Omaha  ჰაიროლერ ტურნირის ბაი-ინი",
        },
        {
          id: 4,
          img: "final-item-hotel-icon.png",
          text: "სასტუმრო Golden Tulip Vivaldi Hotel",
        },
        { img: "final-item-money-icon.png", text: "$500 სახარჯი ფული", id: 5 },
      ],
    },
    {
      id: 3,
      title: "A კატეგორიის საგზურში შედის",
      offers: [
        {
          img: "final-item-ticket-icon.png",
          text: "ორმხრივი ავიაბილეთები",
          id: 1,
        },
        {
          img: "final-item-event-icon.png",
          text: "The Festival In Malta-ს მეინ ივენთის ბაი-ინი",
          id: 2,
        },
        {
          img: "final-item-hotel-icon.png",
          text: "სასტუმრო Golden Tulip Vivaldi Hotel",
          id: 3,
        },
        { img: "final-item-money-icon.png", text: "$500 სახარჯი ფული", id: 4 },
      ],
    },
  ];

  const TicketCount = [
    [
      {
        id: 1,
        title: '"Cashgame Highrollers"',
        img: "poker-item-1-ticket-icon.png",
        text: [{ p: "1 საგზური", id: 1 }],
      },
      {
        id: 2,
        title: '"Cashgame Grinders"',
        img: "poker-item-1-ticket-icon.png",
        text: [{ p: "1 საგზური", id: 1 }],
      },
      {
        id: 3,
        title: '"Tournament Sharks"',
        img: "poker-item-1-ticket-icon.png",
        text: [{ p: "1 საგზური", id: 1 }],
      },
    ],
    [
      {
        id: 4,
        title: '"The Festival in Malta, GTD"',
        img: "poker-item-2-ticket-icon.png",
        text: [
          { p: "A კატეგორიის 1 საგზური", id: 1 },
          { p: "B კატეგორიის 1 საგზური", id: 2 },
          {
            p: "ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიე მსურველს 165₾ ბაი-ინის გადახდით",
            id: 3,
          },
        ],
      },
      {
        id: 5,
        title: '"The Lord of the Rings"',
        img: "poker-item-1-ticket-icon.png",
        text: [
          { p: "C კატეგორიის 1 საგზური", id: 1 },
          {
            p: "ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის გადახდით",
            id: 2,
          },
        ],
      },
    ],
  ];
  return (
    <PanelLayout>
      <PanelComponent>
        <PanelContainer>
          <img className="img" src="/img/final-info-img.jpg" alt="final" />
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
          <FlexBox>
            {TicketOffer.map((singleTable) => (
              <ListComponent className="border-top" key={singleTable.id}>
                <div className="header">{singleTable.title}</div>

                {singleTable.offers.map((singleOffer) => (
                  <div className="offer" key={singleOffer.id}>
                    <img src={`/img/${singleOffer.img}`} alt="" />
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
          <FlexBox>
            {TicketCount.map((el, index) => (
              <FlexBox
                style={{
                  flexDirection: "column",
                  width: "100%",
                  margin: "0",
                }}
                key={index}
              >
                {el.map((singleCard) => (
                  <CardContainer key={singleCard.id}>
                    <CardComponent>
                      <div>{singleCard.title}</div>
                      <img src={`/img/${singleCard.img}`} alt="" />
                    </CardComponent>
                    {singleCard.text.map((text) => (
                      <span key={text.id}>{text.p}</span>
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
        <FlexBox style={{ flexDirection: "row" }}>
          <img src="/img/key.png" alt="key" />
          <h3 className="gold-characters">მისტიური გასაღები</h3>
        </FlexBox>

        <PanelContainer>
          <p className="table-p">
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
