import React, { useState, useCallback, useMemo } from "react";
import { CssBaseline } from "@material-ui/core";
import useCustomStyles from "./styles/Material-UI/style";
import CustomDrawer from "./components/menu/CustomDrawer";
import CustomAppBar from "./components/menu/CustomAppBar";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import { containerProvider } from "./container/provider";
import { IContainer } from "./config/Type";
import { useSelector } from "react-redux";
import { getDeveloper, getMapper } from "./store/selector";

function getContainer(activeTabTitle: string, containerMapperList: IContainer[]): IContainer {
  const activeContainerInfo = containerMapperList.find(containerMapper => containerMapper.title === activeTabTitle);
  return activeContainerInfo ?? containerMapperList[0];
}
function getFirstContainerTitle(containerMapperList: IContainer[]): string {
  return containerMapperList[0].title;
}

function getContainerTitles(containerMapperList: IContainer[]): string[] {
  return containerMapperList.map(containerMapper => containerMapper.title);
}

function App() {
  const developer = useSelector(getDeveloper);
  const containerMapperList = useSelector(getMapper);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeTabTitle, setActiveTabTitle] = useState<string>(getFirstContainerTitle(containerMapperList));
  const tabTitles = useMemo(() => getContainerTitles(containerMapperList), [containerMapperList]);
  const onChangeTab = useCallback((e: any, value: string) => {
    setActiveTabTitle(value);
  }, []);
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
  let containerInfo = useMemo(() => getContainer(activeTabTitle, containerMapperList), [activeTabTitle, containerMapperList]);
  const Container = containerProvider[containerInfo.containerName];
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
          <CustomDrawer
            tabTitles={tabTitles}
            activeTabTitle={activeTabTitle}
            onChangeTab={onChangeTab}
            handleDrawerToggle={handleDrawerToggle}
            theme={theme}
            mobileOpen={mobileOpen}
            developerInfo={developer}
          />
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
