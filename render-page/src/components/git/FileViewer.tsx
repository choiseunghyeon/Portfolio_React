import MarkDown from "./MarkDown";

interface IFileViewerProps {
  fileName: string;
  fileContent: string;
}
function FileViewer({ fileName, fileContent }: IFileViewerProps) {
  // file이 mardkown이면 markdown 아니면 LangFileViewer로 연동
  if (!fileName.includes(".md")) {
    fileContent = fileContent.length > 0 ? "```" + fileContent + "```" : fileContent;
  }
  return <MarkDown markdown={fileContent} />;
}

export default FileViewer;
