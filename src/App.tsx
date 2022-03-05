import React, { useState, useCallback } from "react";
import { CssBaseline } from "@material-ui/core";
import useCustomStyles from "./styles/Material-UI/style";
import CustomDrawer from "./components/menu/CustomDrawer";
import CustomAppBar from "./components/menu/CustomAppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import { containerProvider } from "./container/provider";
import { useDispatch, useSelector } from "react-redux";
import { selectContainerInfo, selectDeveloper, selectMuiTheme } from "./store/selector";
import { changeActiveTab } from "./store/app";
import { toggleDarkMode } from "./store/style";

function App() {
  const developer = useSelector(selectDeveloper);
  const { activeContainer, activeTabTitle, tabTitles } = useSelector(selectContainerInfo);
  const { darkMode, theme } = useSelector(selectMuiTheme);
  const dispatch = useDispatch();
  const classes = useCustomStyles();
  const Container = containerProvider[activeContainer.containerName];

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const onChangeTab = useCallback((e: any, value: string) => {
    dispatch(changeActiveTab(value));
  }, []);

  const handleMode = useCallback(() => {
    dispatch(toggleDarkMode());
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
        <CustomAppBar title="Portfolio" handleDrawerToggle={handleDrawerToggle} handleMode={handleMode} darkMode={darkMode} />
        <nav className={classes.drawer} aria-label="developer info">
          <CustomDrawer
            tabTitles={tabTitles}
            activeTabTitle={activeTabTitle}
            onChangeTab={onChangeTab}
            handleDrawerToggle={handleDrawerToggle}
            direction={theme.direction}
            mobileOpen={mobileOpen}
            developerInfo={developer}
          />
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
