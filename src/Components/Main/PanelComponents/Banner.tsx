import { useMediaQuery, useTheme } from "@mui/material";
import { FlexBox, StyledContainer } from "../../Styles/BannerStyles";

type propsType = {
  isBigBanner?: boolean;
  info: {
    text1: string;
    text2: string;
    prize: string;
    date: string;
    backgroundImg: string;
    backgroundImgMobile: string;
    dateColor: { primary: string; secondary: string };
  };
};

const Banner = ({ info, isBigBanner }: propsType) => {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledContainer
      isResponsive={responsive}
      backgroundImage={
        responsive ? info.backgroundImgMobile : info.backgroundImg
      }
      wideBanner={isBigBanner}
    >
      <FlexBox>
        <div className="left">{info.text1}</div>
        <div className="right">{info.text2}</div>
      </FlexBox>
      <FlexBox>
        <div className="left prize">{info.prize}</div>
        <div className="right">
          <span
            style={{
              background: `${info.dateColor.primary}`,
              color: `${info.dateColor.secondary}`,
            }}
          >
            {info.date}
          </span>
        </div>
      </FlexBox>
    </StyledContainer>
  );
};

export default Banner;
