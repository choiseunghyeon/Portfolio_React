import { createSlice } from "@reduxjs/toolkit";
import { projectInfo } from "src/asset/data/GlobalVariables";
import { ProejctInfo } from "src/config/Type";

const project = createSlice({
  name: "mapper",
  initialState: projectInfo as ProejctInfo[],
  reducers: {},
});

export const projectReducer = project.reducer;
