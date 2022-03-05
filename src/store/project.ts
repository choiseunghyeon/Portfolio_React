import { createSlice } from "@reduxjs/toolkit";
import { projectInfo } from "src/asset/data/GlobalVariables";
import { ProejctInfo } from "src/types/portfolio";

const project = createSlice({
  name: "project",
  initialState: projectInfo as ProejctInfo[],
  reducers: {},
});

export const projectReducer = project.reducer;
