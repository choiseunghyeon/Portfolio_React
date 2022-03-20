export interface IGitUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location?: any;
  email?: any;
  hireable?: any;
  bio: string;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface Links {
  self: string;
  git: string;
  html: string;
}

export type RepoContentType = "dir" | "file" | "symlink" | "submodule";
export interface IRepoContent {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: RepoContentType;
  _links: Links;
}

export interface IRepoFileContent {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: RepoContentType;
  content: string;
  encoding: string;
  _links: Links;
}
