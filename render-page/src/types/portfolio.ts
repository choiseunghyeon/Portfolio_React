export type IconInfo = {
  href?: string;
  title?: string;
  icon: string;
};
type BasicInfo = {
  title: string;
  subtitle: string;
};

export type DeveloperInfo = BasicInfo & {
  content: string;
  imageSrc: string;
  icons: IconInfo[];
};

export type ProejctInfo = BasicInfo & {
  description: string;
  imageSrc: string;
  skills: string[];
  functions: string[];
  icons: IconInfo[];
};

export type TimeLine = {
  id: number;
  year: string;
  title: string;
  body: string;
  icon: any;
  textAlignLeft?: boolean;
  skills?: string[];
  functions?: string[];
};

export type SkillsInfo = {
  iconInfoList: IconInfo[];
};

export type RouterPath = {
  //for index signature
  [key: string]: string[];
  infoPath: string[];
  projectPath: string[];
  skillsPath: string[];
};

export type GitInfo = {
  username: string;
  repositories: string[];
};

export interface IContainer {
  type: string;
  title: string;
  containerName: string;
}
