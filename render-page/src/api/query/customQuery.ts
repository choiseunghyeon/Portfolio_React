import { useQuery } from "react-query";
import { fetchGitRepoContent } from "src/api/http/git";
import { IRepoContent } from "src/types/response";
import { Base64 } from "js-base64";

export const useGitRepoFiles = (folderPath: string) => {
  const { status, data, error } = useQuery<IRepoContent[], unknown, IRepoContent[], [string, string, string]>(["git", "repo", folderPath], async ({ queryKey }) => {
    const [_a, _b, path] = queryKey;
    const data = await fetchGitRepoContent("choiseunghyeon", "vscode-multi-project", path);
    if (data === undefined) {
      throw new Error("data is undefined");
    }
    return data.data;
  });

  return { status, data, error };
};

export const useGitRepoContent = (filePath: string) => {
  const { status, data, error } = useQuery<string, unknown, string, [string, string, string, string]>(["git", "repo", "file", filePath], async ({ queryKey }) => {
    const [_a, _b, _c, path] = queryKey;
    if (path === "") return Promise.resolve("");
    const data = await fetchGitRepoContent("choiseunghyeon", "vscode-multi-project", path);
    // const data = await fetchGitRepoContent("choiseunghyeon", "TIL", "Daily/21년/2021-03.md");
    if (data === undefined) {
      throw new Error("data is undefined");
    }
    console.log(data.data.content);
    return Base64.decode(data.data.content) as any;
  });

  return {
    status,
    data,
    error,
  };
};
