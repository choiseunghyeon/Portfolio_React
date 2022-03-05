import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { createSelector } from "@reduxjs/toolkit";

export const selectProject = state => state.project;
export const selectTimeline = state => state.timeline;
export const selectSkill = state => state.skill;
export const selectDeveloper = state => state.developer;
export const selectActiveContainer = state => state.app.activeContainer;
export const selectContainerMapperList = state => state.app.containerMapperList;
export const selectDarkMode = state => state.style.darkMode;

export const selectContainerInfo = createSelector(selectActiveContainer, selectContainerMapperList, (activeContainer, containerMapperList) => {
  const activeTabTitle = activeContainer.title;
  const tabTitles = containerMapperList.map(containerMapper => containerMapper.title);
  return { activeTabTitle, tabTitles, activeContainer };
});

export const selectMuiTheme = createSelector(selectDarkMode, darkMode => {
  let theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  // for Responsive font size
  theme = responsiveFontSizes(theme);

  return { theme, darkMode };
});
