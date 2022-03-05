import { createSlice } from "@reduxjs/toolkit";
import { containerMapperList } from "src/asset/data/GlobalVariables";
import { IContainer } from "src/config/Type";

const mapper = createSlice({
  name: "mapper",
  initialState: containerMapperList as IContainer[],
  reducers: {},
});

export const mapperReducer = mapper.reducer;
