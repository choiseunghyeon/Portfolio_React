import { createSlice } from "@reduxjs/toolkit";
import { skillsInfo } from "src/asset/data/GlobalVariables";
import { SkillsInfo } from "src/types/portfolio";

const skill = createSlice({
  name: "skill",
  initialState: skillsInfo as SkillsInfo,
  reducers: {},
});

export const skillReducer = skill.reducer;
