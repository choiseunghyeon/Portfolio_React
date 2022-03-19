import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  username: "choiseunghyeon",
  repositories: [
    { name: "vscode-multi-project", contentPath: "", contentFilePath: "" },
    { name: "TIL", contentPath: "", contentFilePath: "" },
  ],
  currentRepositoryName: "vscode-multi-project",
};

const git = createSlice({
  name: "git",
  initialState: initialState,
  reducers: {
    changeCurrentRepositoryName: (state, action: PayloadAction<string>) => {
      return produce(state, draft => {
        draft.currentRepositoryName = action.payload;
      });
    },
    changeContentPath: (state, action: PayloadAction<string>) => {
      return produce(state, draft => {
        const currentRepository = draft.repositories.find(repository => repository.name === draft.currentRepositoryName);
        if (currentRepository === undefined) return;
        currentRepository.contentPath = action.payload;
      });
    },
    changeContentFilePath: (state, action: PayloadAction<string>) => {
      return produce(state, draft => {
        const currentRepository = draft.repositories.find(repository => repository.name === draft.currentRepositoryName);
        if (currentRepository === undefined) return;
        currentRepository.contentFilePath = action.payload;
      });
    },
  },
});

export const { changeCurrentRepositoryName, changeContentPath, changeContentFilePath } = git.actions;

export const gitReducer = git.reducer;
