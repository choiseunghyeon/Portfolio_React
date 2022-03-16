import { Base64 } from "js-base64";
import { marked } from "marked";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { fetchGitRepoContent } from "src/api/http/git";

export interface IMarkDown {
  markdown: string;
}

export default function MarkDown({ markdown }: IMarkDown) {
  const { status, data, error } = useQuery<any>(["git", "repo"], async () => {
    const data = await fetchGitRepoContent("choiseunghyeon", "TIL", "Daily/21년/2021-03.md");
    if (data === undefined) {
      throw new Error("data is undefined");
    }
    return data.data.content as any;
  });
  let abc;
  if (data !== undefined) {
    abc = {
      __html: marked.parse(Base64.decode(data)),
    };
  }
  //   const markdownHtml = useMemo(
  //     () => ({
  //       __html: marked.parse(markdown),
  //     }),
  //     [markdown]
  //   );
  return <>{status === "loading" ? "Loading..." : status === "error" || data === undefined ? <span>Error: ${error}</span> : <div data-testid="markdown" dangerouslySetInnerHTML={abc}></div>}</>;
}
