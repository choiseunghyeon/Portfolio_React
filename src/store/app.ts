import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { containerMapperList, developerInfo, projectInfo, skillsInfo, timeLineItems } from "src/asset/data/GlobalVariables";

const initialState = {
  containerMapperList: containerMapperList,
  activeContainer: containerMapperList[0],
  developer: developerInfo,
  timeline: timeLineItems,
  project: projectInfo,
  skill: skillsInfo,
  git: {
    username: "choiseunghyeon",
  },
};

const app = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    changeActiveTab: (state, action) => {
      return produce(state, draft => {
        const activeTabTitle = action.payload;
        const activeContainer = draft.containerMapperList.find(container => container.title === activeTabTitle);
        draft.activeContainer = activeContainer ?? draft.containerMapperList[0];
      });
    },
  },
});

export const { changeActiveTab } = app.actions;

export const appReducer = app.reducer;
