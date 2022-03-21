import { Octokit } from "@octokit/core";
// https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
const octokit = new Octokit({ auth: "111" });
// https://github.com/dankogai/js-base64
// https://docs.github.com/en/rest/reference/repos#get-repository-content

export const fetchGitUser = async (username: string) => {
  const result = await octokit.request("GET /users/{username}", {
    username,
  });
  return result;
};

/**
 * ex)
 * owner: "choiseunghyeon",
 * repo: "TIL",
 * path: "Daily/21년/2021-03.md",
 */
export const fetchGitRepoContent = async (owner: string, repo: string, path: string) => {
  const result = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner,
    repo,
    path,
  });
  // console.log(Base64.decode(result.data.content));
  return result as any;
};
