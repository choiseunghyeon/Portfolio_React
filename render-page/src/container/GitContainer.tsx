import MarkDown from "src/components/git/MarkDown";
import { IRepoContent } from "src/types/response";
import Chip from "@mui/material/Chip";
import IconComponent from "src/components/common/IconComponent";
import React, { useState } from "react";
import { useGitRepoFiles, useGitRepoContent } from "src/api/query/customQuery";
function GitContainer() {
  const [repoFolderPath, setRepoFolderPath] = useState("");
  const [repoFilePath, setRepoFilePath] = useState("");

  // previous path
  // "" 공백이면 previousPath 없음
  // 공백 아니면 split("/").pop 하고 join('/')

  const { data: repoFiles } = useGitRepoFiles(repoFolderPath);
  const { data: repoContent } = useGitRepoContent(repoFilePath);

  if (repoFiles === undefined || repoContent === undefined) {
    return null;
  }

  return (
    <>
      <PreviousPath repoFolderPath={repoFolderPath} setRepoFolderPath={setRepoFolderPath} />
      {repoFiles.map(repoFile => (
        <ContentPath key={repoFile.path} repo={repoFile} setRepoFolderPath={setRepoFolderPath} setRepoFilePath={setRepoFilePath} />
      ))}
      <MarkDown markdown={repoContent} />
    </>
  );
}

export default GitContainer;

const ContentPath = ({ repo, setRepoFolderPath, setRepoFilePath }: { repo: IRepoContent; setRepoFolderPath: Function; setRepoFilePath: Function }) => {
  const handlePath = () => {
    if (repo.type === "file") {
      setRepoFilePath(repo.path);
    } else {
      setRepoFolderPath(repo.path);
    }
  };
  const iconName = repo.type === "file" ? "InsertDriveFile" : "Folder";
  return <Chip data-testid="gitContentPath" onClick={handlePath} variant="outlined" label={repo.name} icon={<IconComponent icon={iconName} />} />;
};

function PreviousPath({ repoFolderPath, setRepoFolderPath }) {
  if (repoFolderPath === "") return null;

  return (
    <span
      data-testid="gitPreviousContentPath"
      onClick={() => {
        const arr = repoFolderPath.split("/");
        arr.pop();
        setRepoFolderPath(arr.join("/"));
      }}>
      이전
    </span>
  );
}
