import React, { useState, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import useCustomStyles from "./styles/Material-UI/style";
import CustomDrawer from "./components/menu/CustomDrawer";
import CustomAppBar from "./components/menu/CustomAppBar";
import { containerMapper } from "./config/GlobalVariables";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import { containerProvider } from "./container/provider";

function getContainer(pathname: string, defaultTabId: string) {
  let selectedTabId = pathname.split("/").pop() ?? defaultTabId;

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  if (containerMapper[selectedTabId] === undefined) {
    selectedTabId = defaultTabId;
  }

  return containerMapper[selectedTabId];
}

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const location = useLocation();
  const classes = useCustomStyles();
  let theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  let containerInfo = useMemo(() => getContainer(location.pathname, "info"), [location.pathname]);
  const Container = containerProvider[containerInfo.name];
  // for Responsive font size
  theme = responsiveFontSizes(theme);
  const handleMode = useCallback(() => {
    setDarkMode(state => (state = !state));
  }, []);
  const handleDrawerToggle = useCallback(
    (windowWidth: number) => {
      // 현재 윈도우 크기가 breakpoints보다 크면 toggle 기능 차단
      // mobile page에서 메뉴 선택 후 토글 하기 위함
      if (windowWidth > theme.breakpoints.width("sm")) return;
      setMobileOpen(state => (state = !state));
    },
    [theme]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <CustomAppBar handleDrawerToggle={handleDrawerToggle} handleMode={handleMode} darkMode={darkMode} />
        <nav className={classes.drawer} aria-label="developer info">
          <CustomDrawer handleDrawerToggle={handleDrawerToggle} theme={theme} mobileOpen={mobileOpen} />
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container state={containerInfo.state} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
