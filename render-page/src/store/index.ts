import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { appReducer } from "./app";
import { styleReducer } from "./style";
const rootReducer = combineReducers({
  app: appReducer,
  style: styleReducer,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

export type AppDispatch = typeof store.dispatch;
export default store;
