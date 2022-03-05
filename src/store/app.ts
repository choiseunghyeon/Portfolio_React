import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { containerMapperList } from "src/asset/data/GlobalVariables";

const initialState = {
  containerMapperList: containerMapperList,
  activeContainer: containerMapperList[0],
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
