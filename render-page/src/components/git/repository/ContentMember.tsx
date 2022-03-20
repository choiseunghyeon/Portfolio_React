import { Chip } from "@mui/material";
import IconComponent from "src/components/common/IconComponent";
import { RepoContentType } from "src/types/response";

interface IContentMemberProps {
  name: string;
  path: string;
  type: RepoContentType;
  handleContentPath: Function;
}

const ContentMember = ({ name, path, type, handleContentPath }: IContentMemberProps) => {
  const handlePath = () => {
    handleContentPath(path, type);
  };
  const iconName = type === "file" ? "InsertDriveFile" : "Folder";
  return <Chip data-testid="gitContentPath" sx={{ padding: "10px" }} onClick={handlePath} variant="outlined" label={name} icon={<IconComponent icon={iconName} />} />;
};

export default ContentMember;
