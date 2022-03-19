import React, { useCallback, useState } from "react";
import MarkDown from "src/components/git/MarkDown";
import { IRepoContent } from "src/types/response";
import Chip from "@mui/material/Chip";
import IconComponent from "src/components/common/IconComponent";
import { useGitRepoFiles, useGitRepoContent } from "src/api/query/customQuery";
import { Fab, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { selectCurrentRepository, selectRepositoryNameList } from "src/store/selector";
import { useDispatch, useSelector } from "react-redux";
import { changeContentFilePath, changeContentPath, changeCurrentRepositoryName } from "src/store/git";

function GitContainer() {
  const repositoryNameList = useSelector(selectRepositoryNameList);
  const { name, contentPath, contentFilePath } = useSelector(selectCurrentRepository);
  const dispatch = useDispatch();

  const handleCurrentRepository = useCallback(
    (event: React.MouseEvent<HTMLElement>, repositoryName: string) => {
      dispatch(changeCurrentRepositoryName(repositoryName));
    },
    [dispatch]
  );

  const handleContentPath = useCallback(
    path => {
      dispatch(changeContentPath(path));
    },
    [dispatch]
  );

  const handleContentFilePath = useCallback(
    path => {
      dispatch(changeContentFilePath(path));
    },
    [dispatch]
  );

  const { data: repoFiles } = useGitRepoFiles(name, contentPath);
  const { data: repoContent } = useGitRepoContent(name, contentFilePath);

  if (repoFiles === undefined || repoContent === undefined) {
    return null;
  }

  return (
    <>
      <PreviousPath contentPath={contentPath} handleContentPath={handleContentPath} />
      {repoFiles.map(repoFile => (
        <ContentPath key={repoFile.path} repo={repoFile} handleContentPath={handleContentPath} handleContentFilePath={handleContentFilePath} />
      ))}
      <MarkDown markdown={repoContent} />
      <Stack
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}>
        <ToggleButtonGroup orientation="vertical" value={name} exclusive onChange={handleCurrentRepository}>
          {repositoryNameList.map(repositoryName => (
            <ToggleButton key={repositoryName} value={repositoryName} aria-label={repositoryName}>
              {repositoryName}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Fab variant="extended">
          <IconComponent icon="Navigation" />
          Repositories
        </Fab>
      </Stack>
    </>
  );
}

export default GitContainer;

const ContentPath = ({ repo, handleContentPath, handleContentFilePath }: { repo: IRepoContent; handleContentPath: Function; handleContentFilePath: Function }) => {
  const handlePath = () => {
    if (repo.type === "file") {
      handleContentFilePath(repo.path);
    } else {
      handleContentPath(repo.path);
    }
  };
  const iconName = repo.type === "file" ? "InsertDriveFile" : "Folder";
  return <Chip data-testid="gitContentPath" onClick={handlePath} variant="outlined" label={repo.name} icon={<IconComponent icon={iconName} />} />;
};

function PreviousPath({ contentPath, handleContentPath }: { contentPath: string; handleContentPath: Function }) {
  if (contentPath === "") return null;

  return (
    <span
      data-testid="gitPreviousContentPath"
      onClick={() => {
        const arr = contentPath.split("/");
        arr.pop();
        handleContentPath(arr.join("/"));
      }}>
      이전
    </span>
  );
}
