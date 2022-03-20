import { useQuery } from "react-query";
import { fetchGitRepoContent } from "src/api/http/git";
import { IRepoContent, IRepoFileContent } from "src/types/response";
import { Base64 } from "js-base64";

export const useGitRepoFiles = (repositoryName: string, folderPath: string) => {
  const { status, data, error } = useQuery<IRepoContent[], unknown, IRepoContent[], [string, string, string]>(["git", repositoryName, folderPath], async ({ queryKey }) => {
    const [_a, _b, path] = queryKey;
    const data = await fetchGitRepoContent("choiseunghyeon", repositoryName, path);
    if (data === undefined) {
      throw new Error("data is undefined");
    }
    return data.data;
  });

  return { status, data, error };
};

export const useGitRepoContent = (repositoryName: string, filePath: string) => {
  const { status, data, error } = useQuery<IRepoFileContent, unknown, IRepoFileContent, [string, string, string, string]>(["git", repositoryName, "file", filePath], async ({ queryKey }) => {
    const [_a, _b, _c, path] = queryKey;
    const data = await fetchGitRepoContent("choiseunghyeon", repositoryName, path);
    if (data === undefined) {
      throw new Error("data is undefined");
    }
    console.log(data.data.content);
    data.data.content = Base64.decode(data.data.content);
    return data.data;
  });
  return {
    status,
    data,
    error,
  };
};
