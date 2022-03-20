import hljs from "highlight.js";
import { marked } from "marked";

export interface IMarkDown {
  markdown: string;
}

marked.setOptions({
  // langPrefix: "hljs language-",
  highlight: function (code, lang) {
    return hljs.highlightAuto(code).value;
  },
});

export default function MarkDown({ markdown }: IMarkDown) {
  return (
    <div
      data-testid="markdown"
      dangerouslySetInnerHTML={{
        __html: marked(markdown),
      }}></div>
  );
}
