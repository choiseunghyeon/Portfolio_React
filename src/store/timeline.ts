import { createSlice } from "@reduxjs/toolkit";
import { timeLineItems } from "src/asset/data/GlobalVariables";
import { TimeLine } from "src/types/portfolio";

const timeline = createSlice({
  name: "timeline",
  initialState: timeLineItems as TimeLine[],
  reducers: {},
});

export const timelineReducer = timeline.reducer;
