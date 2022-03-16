import { useCallback } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import CustomDrawer from "./components/menu/CustomDrawer";
import CustomAppBar from "./components/menu/CustomAppBar";
import { ThemeProvider } from "@mui/material/styles";
import { containerProvider } from "./container/provider";
import { useDispatch, useSelector } from "react-redux";
import { selectContainerInfo, selectDeveloper, selectMobileDrawerOpen, selectMuiTheme } from "./store/selector";
import { changeActiveTab } from "./store/app";
import { toggleDarkMode, toggleMobileDrawer } from "./store/style";
import MarkDown from "./components/git/MarkDown";

function App() {
  const developer = useSelector(selectDeveloper);
  const { activeContainer, activeTabTitle, tabTitles } = useSelector(selectContainerInfo);
  const { darkMode, theme } = useSelector(selectMuiTheme);
  const mobileDrawerOpen = useSelector(selectMobileDrawerOpen);

  const dispatch = useDispatch();
  const Container = containerProvider[activeContainer.containerName];

  const onChangeTab = useCallback((e: any, value: string) => {
    dispatch(changeActiveTab(value));
  }, []);
  const handleMode = useCallback(() => {
    dispatch(toggleDarkMode());
  }, []);
  const handleDrawerToggle = useCallback(() => {
    dispatch(toggleMobileDrawer());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <CssBaseline />
        <CustomAppBar title="Portfolio" handleDrawerToggle={handleDrawerToggle} handleMode={handleMode} darkMode={darkMode} />
        <nav aria-label="developer info">
          <CustomDrawer
            tabTitles={tabTitles}
            activeTabTitle={activeTabTitle}
            onChangeTab={onChangeTab}
            handleDrawerToggle={handleDrawerToggle}
            direction={theme.direction}
            mobileOpen={mobileDrawerOpen}
            developerInfo={developer}
          />
        </nav>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: theme.spacing(3),
          }}>
          <Toolbar />
          {/* <Box sx={{ marginTop: "10px", marginLeft: "10px" }} /> */}
          {/* <MarkDown markdown="# Marked in the browser\n\nRendered by **marked**." /> */}
          <Container />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
