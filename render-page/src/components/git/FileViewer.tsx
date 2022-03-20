import hljs from "highlight.js";
import MarkDown from "./MarkDown";

function FileViewer({ fileName, fileContent }: any) {
  // file이 mardkown이면 markdown 아니면 LangFileViewer로 연동
  if (!fileName.includes(".md")) {
    fileContent = fileContent.length > 0 ? "```" + fileContent + "```" : fileContent;
  }
  return <MarkDown markdown={fileContent} />;

  //   const html = hljs.highlightAuto(fileContent).value;
  //   return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export default FileViewer;
