import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { containerMapperList, developerInfo, projectInfo, skillsInfo, timeLineItems } from "src/asset/data/GlobalVariables";

// slice로 관리하니 selector 사용하려면 추가 작업이 필요
// state 통으로 관리하고 reducer, state만 따로 나눠서 병합 해서 쓰는게 좋을 듯
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
