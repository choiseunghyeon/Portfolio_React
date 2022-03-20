import { Breadcrumbs, Button } from "@mui/material";

interface IContentLocationProps {
  contentPath: string;
  handleContentPath: Function;
}
function ContentLocation({ contentPath, handleContentPath }: IContentLocationProps) {
  const pathList = contentPath.split("/");
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Button data-testid="gitPartialContentPath" key="root" variant="text" onClick={() => handleContentPath("")}>
        ROOT
      </Button>
      {pathList.map((path, index) => {
        if (path === "") return null;
        return (
          <Button data-testid="gitPartialContentPath" key={index} variant="text" onClick={() => handleContentPath(pathList.slice(0, index + 1).join("/"))}>
            {path}
          </Button>
        );
      })}
    </Breadcrumbs>
  );
}

export default ContentLocation;
