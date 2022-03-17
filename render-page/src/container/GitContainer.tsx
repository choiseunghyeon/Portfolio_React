import { Base64 } from "js-base64";
import { useQuery } from "react-query";
import { fetchGitRepoContent } from "src/api/http/git";
import MarkDown from "src/components/git/MarkDown";

function GitContainer() {
  const { status, data, error } = useQuery<any>(["git", "repo"], async () => {
    const data = await fetchGitRepoContent("choiseunghyeon", "vscode-multi-project", "ARTICLE.md");
    // const data = await fetchGitRepoContent("choiseunghyeon", "TIL", "Daily/21년/2021-03.md");
    if (data === undefined) {
      throw new Error("data is undefined");
    }
    return Base64.decode(data.data.content) as any;
  });

  return <>{status === "loading" ? "Loading..." : status === "error" || data === undefined ? <span>Error: ${error}</span> : <MarkDown markdown={data} />}</>;
}

export default GitContainer;
