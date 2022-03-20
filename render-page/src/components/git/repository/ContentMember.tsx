import { Chip } from "@mui/material";
import IconComponent from "src/components/common/IconComponent";
import { IRepoContent } from "src/types/response";

interface IContentMemberProps {
  repo: IRepoContent;
  handleContentPath: Function;
}

const ContentMember = ({ repo, handleContentPath }: IContentMemberProps) => {
  const handlePath = () => {
    handleContentPath(repo.path, repo.type);
  };
  const iconName = repo.type === "file" ? "InsertDriveFile" : "Folder";
  return <Chip data-testid="gitContentPath" sx={{ padding: "10px" }} onClick={handlePath} variant="outlined" label={repo.name} icon={<IconComponent icon={iconName} />} />;
};

export default ContentMember;
