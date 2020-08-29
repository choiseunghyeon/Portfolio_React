import test from "../styles/images/test.jpg";
import whatToEat from "../styles/images/whatToEat.jpg";
import smartmirror from "../styles/images/smartmirror.jpg";
import portfolioPage from "../styles/images/portfolioPage.PNG";
/*
    icon info
    https://fontawesome.com/icons?d=gallery&s=brands&m=free

    https://img.icons8.com/
 */

// for DeveloperInfo.js
export const developerInfo = {
  title: "Front End Developer",
  subTitle: "최승현",
  content: "",
  imageSrc:
    "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/75234614_955217671543664_4238448438372466688_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=iD6E9PhUfL4AX-kXGPc&oh=3cf98363f2f1e4a46955a90890d08db9&oe=5F73A005",
  icons: [
    {
      href: "https://github.com/choiseunghyeon/",
      icon: "github",
    },
    {
      href: "https://webigotr.tistory.com/",
      icon: "blogger-b",
    },
    {
      href: "https://www.instagram.com/chshyeon_0_0/?hl=ko",
      icon: "instagram",
    },
  ],
};

// for CardList.js
export const projectInfo = [
  {
    title: "Smart Mirror",
    imageSrc: smartmirror,
    skills: ["Vue.js", "Vuetify", "SocketIO", "Node.js(express)", "MongoDB"],
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
        icon: "blogger-b",
      },
      {
        href: "https://github.com/choiseunghyeon/smartmirror_vue",
        icon: "github",
      },
      {
        href: "https://www.instagram.com/p/BjOeTGwnhWW/",
        icon: "instagram",
      },
    ],
  },
  {
    title: "오늘 뭐 먹지?",
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
        icon: "app-store-ios",
      },
      {
        href:
          "https://play.google.com/store/apps/details?id=firstApp.whatToEat_byChoi",
        icon: "google-play",
      },
    ],
  },
  {
    title: "Portfolio",
    imageSrc: portfolioPage,
    skills: ["React.js", "MATERIAL-UI"],
    functions: ["개발자 소개 페이지", "프로젝트 소개 페이지", "스킬셋 페이지"],
    icons: [
      {
        href: "https://github.com/choiseunghyeon/Portfolio_React",
        icon: "github",
      },
    ],
  },
];

// for CardList.js
export const skillsInfo = {
  fontAwesomeArray: [
    {
      title: "HTML5",
      fa: "html5",
    },
    {
      title: "CSS3",
      fa: "css3-alt",
    },
    {
      title: "JavaScript",
      fa: "js",
    },
    {
      title: "Vue",
      fa: "vuejs",
    },
    {
      title: "React",
      fa: "react",
    },
    {
      title: "Node",
      fa: "node",
    },
  ],
  iconSrcArray: [
    {
      imageSrc: "https://img.icons8.com/color/58/000000/flutter.png",
      licenceSrc: "https://icons8.com/icon/7I3BjCqe9rjG/flutter",
      title: "Flutter",
    },
    {
      imageSrc: "https://img.icons8.com/ios-filled/58/000000/jquery.png",
      licenceSrc: "https://icons8.com/icon/40253/jquery",
      title: "jQuery",
    },
    {
      imageSrc: "https://img.icons8.com/color/58/000000/mongodb.png",
      licenceSrc: "https://icons8.com/icon/74402/mongodb",
      title: "MongoDB",
    },
  ],
};
