import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import { developerReducer } from "./developer";
import { mapperReducer } from "./mapper";
import { projectReducer } from "./project";
import { skillReducer } from "./skills";
import { timelineReducer } from "./timeline";
const rootReducer = combineReducers({
  developer: developerReducer,
  timeline: timelineReducer,
  mapper: mapperReducer,
  project: projectReducer,
  skill: skillReducer,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

export type AppDispatch = typeof store.dispatch;
export default store;
