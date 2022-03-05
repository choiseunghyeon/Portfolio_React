import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  darkMode: true,
};

const style = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<undefined>) => {
      return produce(state, draft => {
        state.darkMode = !state.darkMode;
      });
    },
  },
});

export const { toggleDarkMode } = style.actions;

export const styleReducer = style.reducer;
