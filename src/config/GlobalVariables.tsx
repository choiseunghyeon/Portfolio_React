import React from "react";
const smartmirror = require("../styles/images/smartMirror.PNG");
const whatToEat = require("../styles/images/whatToEat.PNG");
const portfolioPage = require("../styles/images/portfolio.PNG");
/* eslint-disable import/first */
import {
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFlutter,
  SiJquery,
  SiMongodb,
} from "react-icons/si";
import {
  FaVuejs,
  FaNode,
  FaInstagram,
  FaGithub,
  FaBloggerB,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
import {
  EmojiPeople,
  LaptopMac,
  AccountBalance,
  Https,
  AccountCircle,
} from "@material-ui/icons";
import SkillFuncItems from "../components/common/SkillFuncItems";
import {
  DeveloperInfo,
  ProejctInfo,
  TimeLine,
  SkillsInfo,
  RouterPath,
} from "./Type";
/*
    icon info
    https://fontawesome.com/icons?d=gallery&s=brands&m=free

    https://icons8.com/icons/
 */
// use it /src/components/menu/DeveloperInfo.js
export const developerInfo: DeveloperInfo = {
  title: "Front End Developer",
  subtitle: "최승현",
  content: "",
  imageSrc:
    "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/75234614_955217671543664_4238448438372466688_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=iD6E9PhUfL4AX-kXGPc&oh=3cf98363f2f1e4a46955a90890d08db9&oe=5F73A005",
  icons: [
    {
      href: "https://github.com/choiseunghyeon/",
      icon: <FaGithub />,
    },
    {
      href: "https://webigotr.tistory.com/",
      icon: <FaBloggerB />,
    },
    {
      href: "https://www.instagram.com/chshyeon_0_0/?hl=ko",
      icon: <FaInstagram />,
    },
  ],
};

// use it /src/pages/ProjectPage.js
export const projectInfo: ProejctInfo[] = [
  {
    title: "Smart Mirror",
    subtitle: "기획, 개발, 디자인 최승현",
    description:
      "뷰티 유투버를 보면서 화장하는 누나의 모습이 안쓰러워 제작하기 시작하였습니다. 군대에 있을 때 제작하였으며 하드웨어, 소프트웨어까지 직접 제작하였습니다. ",
    imageSrc: smartmirror,
    skills: [
      "Vue.js",
      "Vuex",
      "Vuetify",
      "SocketIO",
      "Node.js(express)",
      "MongoDB",
    ],
    functions: [
      "날씨",
      "시간",
      "미세먼지",
      "유튜브 영상 검색 및 재생",
      "영상 제어(멈춤, 시작, 10초 앞-뒤로 이동 등)",
      "영상 저장",
      "무드등 제어",
    ],
    icons: [
      {
        href: "https://webigotr.tistory.com/246",
        icon: <FaGithub />,
      },
      {
        href: "https://github.com/choiseunghyeon/smartmirror_vue",
        icon: <FaBloggerB />,
      },
      {
        href: "https://www.instagram.com/p/BjOeTGwnhWW/",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    title: "오늘 뭐 먹지?",
    subtitle: "기획, 개발, 디자인 최승현",
    description:
      "학교 앞에서 자취 생활을 오래 하다 보니 매일 뭐 먹을지 고민하는 제 자신과 주변 사람을 많이 보게 되었습니다. 그래서 이러한 고민을 해결하고자 오늘 뭐 먹지? 라는 어플을 제작하게 되었습니다.",
    skills: ["Flutter"],
    functions: [
      "음식점-카페-술집 리스트",
      "선택된 가게 랜덤 선택",
      "google Map에서 가게 위치 확인",
      "가게 정보 확인 및 전화",
    ],
    imageSrc: whatToEat,
    icons: [
      {
        href:
          "https://apps.apple.com/kr/app/%EB%B0%B1%EC%84%9D%EB%8C%80-%EB%AD%90-%EB%A8%B9%EC%A7%80/id1516435354",
        icon: <FaAppStoreIos />,
      },
      {
        href:
          "https://play.google.com/store/apps/details?id=firstApp.whatToEat_byChoi",
        icon: <FaGooglePlay />,
      },
    ],
  },
  {
    title: "Portfolio",
    subtitle: "기획, 개발, 디자인 최승현",
    description:
      "자신을 어떻게 어필할지 고민하는 개발자들을 위해 포트폴리오 플랫폼이 있으면 좋겠다고 생각하여 제작하게 되었습니다.",
    imageSrc: portfolioPage,
    skills: ["React.js", "MATERIAL-UI"],
    functions: ["개발자 소개 페이지", "프로젝트 소개 페이지", "스킬셋 페이지"],
    icons: [
      {
        href: "https://github.com/choiseunghyeon/Portfolio_React",
        icon: <FaGithub />,
      },
    ],
  },
];

// use it /src/pages/SkillsPage.js
export const skillsInfo: SkillsInfo = {
  iconInfoArray: [
    {
      title: "HTML5",
      icon: <SiHtml5 />,
    },
    {
      title: "CSS3",
      icon: <SiCss3 />,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      title: "Vue",
      icon: <FaVuejs />,
    },
    {
      title: "React",
      icon: <SiReact />,
    },
    {
      title: "Node",
      icon: <FaNode />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      title: "Flutter",
      icon: <SiFlutter />,
    },
    {
      title: "jQuery",
      icon: <SiJquery />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
    },
  ],
};

// use it /src/pages/InfoPage.js
export const timeLineItems: TimeLine[] = [
  {
    id: 1,
    year: "2015년",
    title: "백석대학교 입학",
    body: "ICT학부 정보보호학과 입학 및 정보보호 동아리(HUB) 가입",
    icon: <AccountBalance />,
  },
  {
    id: 2,
    year: "2016년 ~ 2017년",
    title: "차세대 보안리더 양성프로그램(BOB) 진행",
    body: "BOB5기 교육 이수 및 웹 해킹 및 보안 프로젝트 진행",
    icon: <Https />,
  },
  {
    id: 3,
    year: "2017년 ~ 2018년",
    title: "군대 입대 및 전역",
    body:
      "경찰청 사이버 수사 기획에서 근무 / 실적 취합 사이트 개발 및 유지보수",
    icon: <EmojiPeople />,
  },
  {
    id: 5,
    year: "2018년 ~ 2019년",
    title: "Smart Mirror 개발",
    body: "하드웨어 및 소프트웨어 제작 / Full Stack 개발",
    textAlignLeft: true,
    component: (
      <SkillFuncItems
        skills={projectInfo[0].skills}
        functions={projectInfo[0].functions}
      />
    ),
    icon: <LaptopMac />,
  },
  {
    id: 6,
    year: "2020년",
    title: "오늘 뭐 먹지? 개발",
    body: "",
    component: (
      <SkillFuncItems
        skills={projectInfo[1].skills}
        functions={projectInfo[1].functions}
      />
    ),

    icon: <LaptopMac />,
  },
  {
    id: 7,
    year: "2020년",
    title: "취업 중...",
    body: "",
    icon: <AccountCircle />,
  },
];

// type your github repository name. it will be your static site default path
const REPO_NAME: string = "/Portfolio_React";
export const routerPath: RouterPath = {
  infoPath: [REPO_NAME, REPO_NAME + "/info", "/"],
  projectPath: [REPO_NAME + "/project", "/project"],
  skillsPath: [REPO_NAME + "/skills", "/skills"],
};
