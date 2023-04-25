import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  AccordionStyled,
  FooterButton,
  FooterContainer,
  StyledButton,
} from "../Styles/FooterStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomSlider from "./CustomSlider";

const Footer = () => {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    slidesToShow: 3.1,

    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.1,
        },
      },
    ],
  };

  const slides = [
    {
      img: "promo-1.png",
      id: 1,
    },
    {
      img: "promo-2.png",
      id: 2,
    },
    { img: "promo-3.png", id: 3 },
    {
      img: "promo-4.png",
      id: 4,
    },
    {
      img: "promo-1.png",
      id: 5,
    },
    {
      img: "promo-2.png",
      id: 6,
    },
  ];

  return (
    <>
      <FooterContainer>
        <FooterButton>
          <div>dima</div>
        </FooterButton>
        <Box sx={{ marginBottom: "60px" }}>
          <h3>წესები და პირობები</h3>
          <AccordionStyled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                როდის იწყება და რა ფორმატით გაიმართება აქცია
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </AccordionStyled>
          <AccordionStyled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>როგორ მივიღო აქციაში მონაწილეობა?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </AccordionStyled>
          <AccordionStyled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>სხვადასხვა</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </AccordionStyled>
        </Box>

        <CustomSlider settings={settings} slides={slides} />
      </FooterContainer>
      {responsive && (
        <FooterButton>
          <StyledButton>ითამაშე</StyledButton>
        </FooterButton>
      )}
    </>
  );
};
export default Footer;
