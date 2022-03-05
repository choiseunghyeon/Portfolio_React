import { createSlice } from "@reduxjs/toolkit";
import { developerInfo } from "src/asset/data/GlobalVariables";
import { DeveloperInfo } from "src/config/Type";

const developer = createSlice({
  name: "mapper",
  initialState: developerInfo as DeveloperInfo,
  reducers: {},
});

export const developerReducer = developer.reducer;
