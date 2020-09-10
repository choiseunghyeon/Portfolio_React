type IconInfo = {
  href: string;
  icon: string;
};
type BasicInfo = {
  title: string;
  subtitle: string;
};

export type FA = {
  title: string;
  fa: any;
};
export type IconSrc = {
  imageSrc: string;
  licenceSrc: string;
  title: string;
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
  fontAwesomeArray: FA[];
  iconSrcArray: IconSrc[];
};
