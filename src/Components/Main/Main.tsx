import {
  Tabs,
  Tab,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { TabStyled, TabsStyled } from "../Styles/MainDialogStyles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Main = () => {
  const [value, setValue] = useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <h1>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</h1>
      <p>მოხვდი პოკერის ფესტივალზე მალტაში</p>
      <TabsStyled
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{
          style: { display: "none" },
        }}
        centered
      >
        <TabStyled
          label={
            <>
              {isMobile ? (
                <>
                  <Typography variant="h6">28 ოქტ. - 7 ნოემ.</Typography>
                  <Typography variant="h5">Cash Games</Typography>
                </>
              ) : (
                <>
                  <Typography variant="h6">1-29 აპრილი</Typography>
                  <Typography variant="h5">Cash Games</Typography>
                </>
              )}
            </>
          }
          {...a11yProps(0)}
        />
        <TabStyled
          label={
            <>
              {isMobile ? (
                <>
                  <Typography variant="h6">10 - 29 დეკ.</Typography>
                  <Typography variant="h5">New Year Series</Typography>
                </>
              ) : (
                <>
                  <Typography variant="h6">13-29 აპრილი</Typography>
                  <Typography variant="h5">Spring Series</Typography>
                </>
              )}
            </>
          }
          {...a11yProps(1)}
        />
        <TabStyled
          label={
            <>
              {isMobile ? (
                <>
                  <Typography variant="h6">28 ოქტ. - 7 ნოემ.</Typography>
                  <Typography variant="h5">Final Stage</Typography>
                </>
              ) : (
                <>
                  <Typography variant="h6">30 აპრილი</Typography>
                  <Typography variant="h5">Final Stage</Typography>
                </>
              )}
            </>
          }
          {...a11yProps(2)}
        />
      </TabsStyled>
      <TabPanel value={value} index={0}>
        <div>dima</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>dima</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>dima</div>
      </TabPanel>
    </>
  );
};
export default Main;