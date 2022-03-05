import { ProejctInfo } from "../../../config/Type";
export const projectCardItemStub: ProejctInfo = {
  title: "Smart Mirror",
  subtitle: "기획, 개발, 디자인 최승현",
  description: "뷰티 유투버를 보면서 화장하는 누나의 모습이 안쓰러워 제작하기 시작하였습니다. 군대에 있을 때 제작하였으며 하드웨어, 소프트웨어까지 직접 제작하였습니다. ",
  imageSrc: `/smartMirror.png`,
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
};
