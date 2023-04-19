import { Dialog, useMediaQuery, useTheme, Paper, Box } from "@mui/material";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {
  DialogStyled,
  PaperStyled,
} from "./Components/Styles/MainDialogStyles";

const App = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <main>
      <DialogStyled
        open={true}
        fullScreen={fullScreen}
        fullWidth
        maxWidth={"lg"}
      >
        <PaperStyled>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </PaperStyled>
      </DialogStyled>
    </main>
  );
};

export default App;
