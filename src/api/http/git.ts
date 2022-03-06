import http from "./http";

const HEADERS = {
  "Content-Type": "application/json",
};

const BASE_URL = "https://api.github.com";

export const getGitUser = (username: string) => {
  const URL = `${BASE_URL}/users/${username}`;
  return http.get(URL, {});
};
