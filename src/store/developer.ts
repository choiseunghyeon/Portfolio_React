import { createSlice } from "@reduxjs/toolkit";
import { developerInfo } from "src/asset/data/GlobalVariables";
import { DeveloperInfo } from "src/types/portfolio";

const developer = createSlice({
  name: "developer",
  initialState: developerInfo as DeveloperInfo,
  reducers: {},
});

export const developerReducer = developer.reducer;
