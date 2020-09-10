import React, { useState, useCallback, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import { CssBaseline, Typography } from "@material-ui/core";
import useCustomStyles from "./styles/Material-UI/style";
import CustomDrawer from "./components/menu/CustomDrawer";
import CustomAppBar from "./components/menu/CustomAppBar";
import { routerPath } from "./config/GlobalVariables";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // for Responsive font size
  theme = responsiveFontSizes(theme);
  const handleMode = useCallback(() => {
    setDarkMode((state) => (state = !state));
  }, []);
  const handleDrawerToggle = useCallback(
    (windowWidth) => {
      // 현재 윈도우 크기가 breakpoints보다 크면 toggle 기능 차단
      // mobile page에서 메뉴 선택 후 토글 하기 위함
      if (windowWidth > theme.breakpoints.width("sm")) return;
      setMobileOpen((state) => (state = !state));
    },
    [theme]
  );

  const { infoPath, projectPath, skillsPath } = routerPath;

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <CustomAppBar
          handleDrawerToggle={handleDrawerToggle}
          handleMode={handleMode}
          darkMode={darkMode}
        />
        <nav className={classes.drawer} aria-label="developer info">
          <CustomDrawer
            handleDrawerToggle={handleDrawerToggle}
            theme={theme}
            mobileOpen={mobileOpen}
          />
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path={infoPath} component={InfoPage} exact />
            <Route path={projectPath} component={ProjectPage} />
            <Route path={skillsPath} component={SkillsPage} />
            <Route
              render={() => (
                <Typography variant="h2">
                  존재하지 않는 페이지입니다.
                </Typography>
              )}
            />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
