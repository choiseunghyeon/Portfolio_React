import { createSlice } from "@reduxjs/toolkit";
import { skillsInfo } from "src/asset/data/GlobalVariables";
import { SkillsInfo } from "src/config/Type";

const skill = createSlice({
  name: "timeline",
  initialState: skillsInfo as SkillsInfo,
  reducers: {},
});

export const skillReducer = skill.reducer;
