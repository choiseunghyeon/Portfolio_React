import MarkDown from "./MarkDown";

function FileViewer({ fileName, fileContent }: any) {
  // file이 mardkown이면 markdown 아니면 LangFileViewer로 연동
  if (!fileName.includes(".md")) {
    fileContent = fileContent.length > 0 ? "```" + fileContent + "```" : fileContent;
  }
  return <MarkDown markdown={fileContent} />;
}

export default FileViewer;
