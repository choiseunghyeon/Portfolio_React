import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  darkMode: true,
  mobileDrawerOpen: true,
};

const style = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<undefined>) => {
      return produce(state, draft => {
        draft.darkMode = !draft.darkMode;
      });
    },
    toggleMobileDrawer: (state, action: PayloadAction<undefined>) => {
      return produce(state, draft => {
        draft.mobileDrawerOpen = !draft.mobileDrawerOpen;
      });
    },
  },
});

export const { toggleDarkMode, toggleMobileDrawer } = style.actions;

export const styleReducer = style.reducer;
