import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { appReducer } from "./app";
import { developerReducer } from "./developer";
import { projectReducer } from "./project";
import { skillReducer } from "./skills";
import { styleReducer } from "./style";
import { timelineReducer } from "./timeline";
const rootReducer = combineReducers({
  app: appReducer,
  developer: developerReducer,
  timeline: timelineReducer,
  project: projectReducer,
  skill: skillReducer,
  style: styleReducer,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

export type AppDispatch = typeof store.dispatch;
export default store;
