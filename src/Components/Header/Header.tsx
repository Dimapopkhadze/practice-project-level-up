import { Button, useMediaQuery, useTheme, IconButton } from "@mui/material";
import {
  ButtonStyledLeft,
  ButtonStyledRight,
  DivStyled,
  FloatingDiv,
  DivRight,
  DivLeft,
} from "../Styles/HeaderStyles";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {responsive && (
        <DivStyled>
          <div className="left">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div>
            <ButtonStyledLeft>Sign up</ButtonStyledLeft>
            <ButtonStyledRight>Sign in</ButtonStyledRight>
          </div>
        </DivStyled>
      )}
      <img src="/img/banner.jpg" alt="banner"></img>

      <FloatingDiv>
        <DivLeft>
          <div className="slots">სლოტები</div>
          <div>10 სექტემბერი - 7 ნოემბერი</div>
        </DivLeft>
        <DivRight>
          <IconButton>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </DivRight>
      </FloatingDiv>
    </>
  );
};
export default Header;
