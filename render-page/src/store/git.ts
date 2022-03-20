import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { RepoContentType } from "src/types/response";

interface IChangeSelectedContentPath {
  path: string;
  type: RepoContentType;
}

const initialState = {
  username: "choiseunghyeon",
  repositories: [
    { name: "vscode-multi-project", selectedContentPath: "", contentFolderPath: "", contentFilePath: "" },
    { name: "TIL", selectedContentPath: "", contentFolderPath: "", contentFilePath: "" },
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
    changeSelectedContentPath: (state, action: PayloadAction<IChangeSelectedContentPath>) => {
      return produce(state, draft => {
        const { path, type } = action.payload;
        const currentRepository = draft.repositories.find(repository => repository.name === draft.currentRepositoryName);
        if (currentRepository === undefined) return;
        currentRepository.selectedContentPath = path;

        if (type === "file") {
          currentRepository.contentFilePath = path;
        } else {
          currentRepository.contentFolderPath = path;
        }
      });
    },
  },
});

export const { changeCurrentRepositoryName, changeSelectedContentPath } = git.actions;

export const gitReducer = git.reducer;

createEntityAdapter({});
