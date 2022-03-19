import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { createSelector } from "@reduxjs/toolkit";

// app
export const selectProject = state => state.app.project;
export const selectTimeline = state => state.app.timeline;
export const selectSkill = state => state.app.skill;
export const selectDeveloper = state => state.app.developer;
export const selectActiveContainer = state => state.app.activeContainer;
export const selectContainerMapperList = state => state.app.containerMapperList;

export const selectContainerInfo = createSelector(selectActiveContainer, selectContainerMapperList, (activeContainer, containerMapperList) => {
  const activeTabTitle = activeContainer.title;
  const tabTitles = containerMapperList.map(containerMapper => containerMapper.title);
  return { activeTabTitle, tabTitles, activeContainer };
});

// style
export const selectDarkMode = state => state.style.darkMode;
export const selectMobileDrawerOpen = state => state.style.mobileDrawerOpen;

export const selectMuiTheme = createSelector(selectDarkMode, darkMode => {
  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  // for Responsive font size
  theme = responsiveFontSizes(theme);

  return { theme, darkMode };
});

// git
export const selectRepositories = state => state.git.repositories;
export const selectCurrentRepositoryName = state => state.git.currentRepositoryName;

export const selectRepositoryNameList = createSelector(selectRepositories, repositories => {
  return repositories.map(repository => repository.name);
});

export const selectCurrentRepository = createSelector(selectRepositories, selectCurrentRepositoryName, (repositories, currentRepositoryName) => {
  return repositories.find(repository => repository.name === currentRepositoryName);
});
