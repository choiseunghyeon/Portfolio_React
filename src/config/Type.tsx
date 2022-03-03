export type IconInfo = {
  href?: string;
  title?: string;
  icon: JSX.Element;
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
  component?: JSX.Element;
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

export interface IContainer {
  type: string;
  title: string;
  containerName: string;
  state: any;
}
