import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useTheme } from "@material-ui/core/styles";
import useCustomStyles from "./styles/Material-UI/style";
import CustomDrawer from "./components/menu/CustomDrawer";
import { routerPath } from "./config/GlobalVariables";
function App() {
  const classes = useCustomStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = (windowWidth) => {
    // 현재 윈도우 크기가 breakpoints보다 크면 toggle 기능 차단
    // mobile page에서 메뉴 선택 후 토글 하기 위함
    if (windowWidth > theme.breakpoints.width("sm")) return;
    setMobileOpen(!mobileOpen);
  };
  const { infoPath, projectPath, skillsPath } = routerPath;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.accountButton}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Typography variant="h5">Portfolio</Typography>
        </Toolbar>
      </AppBar>
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
              <Typography variant="h2">존재하지 않는 페이지입니다.</Typography>
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
