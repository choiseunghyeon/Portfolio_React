import React, { useCallback, useState } from "react";
import { IRepoContent } from "src/types/response";
import Chip from "@mui/material/Chip";
import IconComponent from "src/components/common/IconComponent";
import { useGitRepoFiles, useGitRepoContent, useGitRepositoryContent } from "src/api/query/customQuery";
import { Breadcrumbs, Button, Grid, Menu, MenuItem } from "@mui/material";
import { selectCurrentRepository, selectRepositoryNameList } from "src/store/selector";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentRepositoryName, changeSelectedContentPath } from "src/store/git";
import FileViewer from "src/components/git/FileViewer";

function GitContainer() {
  const repositoryNameList = useSelector(selectRepositoryNameList);
  const { name, contentFolderPath, contentFilePath, selectedContentPath } = useSelector(selectCurrentRepository);
  const dispatch = useDispatch();

  const handleCurrentRepository = useCallback(
    (repositoryName: string) => {
      dispatch(changeCurrentRepositoryName(repositoryName));
    },
    [dispatch]
  );

  const handleContentPath = useCallback(
    (path, type) => {
      dispatch(changeSelectedContentPath({ path, type }));
    },
    [dispatch]
  );

  const { data: contentPathList } = useGitRepoFiles(name, contentFolderPath);
  const { data: contentPath } = useGitRepoContent(name, contentFilePath);

  return (
    <>
      <RepositoryMenu repositoryNameList={repositoryNameList} handleCurrentRepository={handleCurrentRepository} />
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <ContentLocation contentPath={selectedContentPath} handleContentPath={handleContentPath} />
        </Grid>
        {contentPathList &&
          contentPathList.map(repoFile => (
            <Grid item>
              <ContentPath key={repoFile.path} repo={repoFile} handleContentPath={handleContentPath} />
            </Grid>
          ))}
      </Grid>
      {contentPath && <FileViewer fileName={contentPath.name} fileContent={contentPath.content} />}
    </>
  );
}

export default GitContainer;

function ContentLocation({ contentPath, handleContentPath }: { contentPath: string; handleContentPath: Function }) {
  const pathList = contentPath.split("/");
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Button data-testid="contentPathLocation" key={123} variant="text" onClick={() => handleContentPath("")}>
        ROOT
      </Button>
      {pathList.map((path, index) => {
        if (path === "") return null;
        return (
          <Button data-testid="contentPathLocation" key={index} variant="text" onClick={() => handleContentPath(pathList.slice(0, index + 1).join("/"))}>
            {path}
          </Button>
        );
      })}
    </Breadcrumbs>
  );
}

const ContentPath = ({ repo, handleContentPath }: { repo: IRepoContent; handleContentPath: Function }) => {
  const handlePath = () => {
    handleContentPath(repo.path, repo.type);
  };
  const iconName = repo.type === "file" ? "InsertDriveFile" : "Folder";
  return <Chip data-testid="gitContentPath" sx={{ padding: "10px" }} onClick={handlePath} variant="outlined" label={repo.name} icon={<IconComponent icon={iconName} />} />;
};

function RepositoryMenu({ repositoryNameList, handleCurrentRepository }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number, selectedRepositoryName: string) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    handleCurrentRepository(selectedRepositoryName);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        data-testid="gitRepository"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickListItem}>
        현재 선택된 Repository: {repositoryNameList[selectedIndex]}
      </Button>
      <Menu id="lock-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {repositoryNameList.map((repositoryName, index) => (
          <MenuItem data-testid="gitRepositoryMenu" key={repositoryName} selected={index === selectedIndex} onClick={event => handleMenuItemClick(event, index, repositoryName)}>
            {repositoryName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
