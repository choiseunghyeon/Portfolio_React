import { useCallback } from "react";
import { useGitRepoFiles, useGitRepoContent } from "src/api/query/customQuery";
import { Grid } from "@mui/material";
import { selectCurrentRepository, selectRepositoryNameList } from "src/store/selector";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentRepositoryName, changeSelectedContentPath } from "src/store/git";
import FileViewer from "src/components/git/FileViewer";
import ContentMember from "src/components/git/repository/ContentMember";
import ContentLocation from "src/components/git/repository/ContentLocation";
import RepositoryMenu from "src/components/git/repository/RepositoryMenu";

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
      <RepositoryMenu repositoryNameList={repositoryNameList} currentRepositoryName={name} handleCurrentRepository={handleCurrentRepository} />
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <ContentLocation contentPath={selectedContentPath} handleContentPath={handleContentPath} />
        </Grid>
        {contentPathList &&
          contentPathList.map(repoFile => (
            <Grid item>
              <ContentMember key={repoFile.path} name={repoFile.name} path={repoFile.path} type={repoFile.type} handleContentPath={handleContentPath} />
            </Grid>
          ))}
      </Grid>
      {contentPath && <FileViewer fileName={contentPath.name} fileContent={contentPath.content} />}
    </>
  );
}

export default GitContainer;
