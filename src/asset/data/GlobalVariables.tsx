import { DeveloperInfo, ProejctInfo, TimeLine, SkillsInfo, IContainer } from "../../types/portfolio";

export const LOCAL_IMAGE_PATH = "/Portfolio_React/static/images/";
// use it /src/components/menu/DeveloperInfo.js
export const developerInfo: DeveloperInfo = {
  title: "Front End Developer",
  subtitle: "최승현",
  content: "",
  imageSrc: `${LOCAL_IMAGE_PATH}/profilePicture.jpg`,
  icons: [
    {
      href: "https://github.com/choiseunghyeon/",
      icon: "FaGithub",
    },
    {
      href: "https://webigotr.tistory.com/",
      icon: "FaBloggerB",
    },
    {
      href: "https://www.instagram.com/chshyeon_0_0/?hl=ko",
      icon: "FaInstagram",
    },
  ],
};

// use it /src/pages/ProjectPage.js
export const projectInfo: ProejctInfo[] = [
  {
    title: "Smart Mirror",
    subtitle: "기획, 개발, 디자인 최승현",
    description: "뷰티 유투버를 보면서 화장하는 누나의 모습이 안쓰러워 제작하기 시작하였습니다. 군대에 있을 때 제작하였으며 하드웨어, 소프트웨어까지 직접 제작하였습니다. ",
    imageSrc: `${LOCAL_IMAGE_PATH}/smartMirror.png`,
    skills: ["Vue.js", "Vuex", "Vuetify", "SocketIO", "Node.js(express)", "MongoDB"],
    functions: ["날씨", "시간", "미세먼지", "유튜브 영상 검색 및 재생", "영상 제어(멈춤, 시작, 10초 앞-뒤로 이동 등)", "영상 저장", "무드등 제어"],
    icons: [
      {
        href: "https://webigotr.tistory.com/246",
        icon: "FaGithub",
      },
      {
        href: "https://github.com/choiseunghyeon/smartmirror_vue",
        icon: "FaBloggerB",
      },
      {
        href: "https://www.instagram.com/p/BjOeTGwnhWW/",
        icon: "FaInstagram",
      },
    ],
  },
  {
    title: "오늘 뭐 먹지?",
    subtitle: "기획, 개발, 디자인 최승현",
    description:
      "학교 앞에서 자취 생활을 오래 하다 보니 매일 뭐 먹을지 고민하는 제 자신과 주변 사람을 많이 보게 되었습니다. 그래서 이러한 고민을 해결하고자 오늘 뭐 먹지? 라는 어플을 제작하게 되었습니다.",
    skills: ["Flutter"],
    functions: ["음식점-카페-술집 리스트", "선택된 가게 랜덤 선택", "google Map에서 가게 위치 확인", "가게 정보 확인 및 전화"],
    imageSrc: `${LOCAL_IMAGE_PATH}/whatToEat.png`,
    icons: [
      {
        href: "https://apps.apple.com/kr/app/%EB%B0%B1%EC%84%9D%EB%8C%80-%EB%AD%90-%EB%A8%B9%EC%A7%80/id1516435354",
        icon: "FaAppStoreIos",
      },
      {
        href: "https://play.google.com/store/apps/details?id=firstApp.whatToEat_byChoi",
        icon: "FaGooglePlay",
      },
    ],
  },
  {
    title: "Portfolio",
    subtitle: "기획, 개발, 디자인 최승현",
    description: "자신을 어떻게 어필할지 고민하는 개발자들을 위해 포트폴리오 플랫폼이 있으면 좋겠다고 생각하여 제작하게 되었습니다.",
    imageSrc: `${LOCAL_IMAGE_PATH}/portfolio.png`,
    skills: ["React.js", "MATERIAL-UI"],
    functions: ["개발자 소개 페이지", "프로젝트 소개 페이지", "스킬셋 페이지"],
    icons: [
      {
        href: "https://github.com/choiseunghyeon/Portfolio_React",
        icon: "FaGithub",
      },
    ],
  },
  {
    title: "VSC Extension - Multi Project",
    subtitle: "개발 최승현",
    description:
      "회사 프로젝트의 모듈들이 각 폴더로 분리되어 있어서 개발할 때는 VSC가 여러 개 실행됩니다.\n 각 폴더를 찾고 관리하는게 불편하여 하나의 VSC WorkSpace에서 여러 모듈을 관리하고 빠르게 이동하기 위해 개발하였습니다.",
    imageSrc: `${LOCAL_IMAGE_PATH}/multiProject.png`,
    skills: ["TypeScript", "VSC Extension"],
    functions: ["폴더 관리", "폴더 이동", "북마크"],
    icons: [
      {
        href: "https://marketplace.visualstudio.com/items?itemName=choiseunghyeon.multi-project",
        icon: "FaMicrosoft",
      },
      {
        href: "https://github.com/choiseunghyeon/vscode-multi-project",
        icon: "FaGithub",
      },
    ],
  },
];

// use it /src/pages/SkillsPage.js
export const skillsInfo: SkillsInfo = {
  iconInfoList: [
    {
      title: "HTML5",
      icon: "SiHtml5",
    },
    {
      title: "CSS3",
      icon: "SiCss3",
    },
    {
      title: "JavaScript",
      icon: "SiJavascript",
    },
    {
      title: "Vue",
      icon: "FaVuejs",
    },
    {
      title: "React",
      icon: "SiReact",
    },
    {
      title: "Node",
      icon: "FaNode",
    },
    {
      title: "TypeScript",
      icon: "SiTypescript",
    },
    {
      title: "VSC",
      icon: "SiVisualstudiocode",
    },
    {
      title: "Flutter",
      icon: "SiFlutter",
    },
    {
      title: "jQuery",
      icon: "SiJquery",
    },
    {
      title: "MongoDB",
      icon: "SiMongodb",
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
    icon: "AccountBalance",
  },
  {
    id: 2,
    year: "2016년 ~ 2017년",
    title: "차세대 보안리더 양성프로그램(BOB) 진행",
    body: "BOB5기 교육 이수 및 웹 해킹 및 보안 프로젝트 진행",
    icon: "Https",
  },
  {
    id: 3,
    year: "2017년 ~ 2018년",
    title: "군대 입대 및 전역",
    body: "경찰청 사이버 수사 기획에서 근무 / 실적 취합 사이트 개발 및 유지보수",
    icon: "EmojiPeople",
  },
  {
    id: 5,
    year: "2018년 ~ 2019년",
    title: "Smart Mirror 개발",
    body: "하드웨어 및 소프트웨어 제작 / Full Stack 개발",
    textAlignLeft: true,
    skills: projectInfo[0].skills,
    functions: projectInfo[0].functions,
    icon: "LaptopMac",
  },
  {
    id: 6,
    year: "2020년",
    title: "오늘 뭐 먹지? 개발",
    body: "",
    skills: projectInfo[1].skills,
    functions: projectInfo[1].functions,
    icon: "Restaurant",
  },
  {
    id: 7,
    year: "2020년 8월 26일",
    title: "포트폴리오 페이지 개발",
    body: "데이터 기반 포트폴리오 렌더링 페이지",
    icon: "ContactMail",
  },
  {
    id: 8,
    year: "2020년 11월 16일",
    title: "이카운트 입사",
    body: "자체 프론트엔드 프레임워크 신규 기능 개발 및 유지 보수",
    icon: "Business",
  },
  {
    id: 9,
    year: "2021년 10월 12일",
    title: "이카운트 신규 프로젝트 진행",
    body: "자체 프론트엔드 프레임워크 신규 기능 개발 / 리팩토링 / 테스트 코드 설계 및 작성",
    icon: "AccountCircle",
  },
  {
    id: 10,
    year: "2021년 11월 21일",
    title: "Visual Studio Code Extension Multi Project 개발",
    body: "파일, 폴더 관리 및 이동 간편화 ",
    icon: "Code",
  },
];

export const containerMapperList: IContainer[] = [
  {
    type: "info",
    title: "INFO",
    containerName: "InfoContainer",
  },
  {
    type: "project",
    title: "PROJECT",
    containerName: "ProjectContainer",
  },
  {
    type: "skills",
    title: "SKILLS",
    containerName: "SkillContainer",
  },
];
