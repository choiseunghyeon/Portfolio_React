import { TimeLine } from "src/types/portfolio";
import { MyTimeLineProps } from "../MyTimeLine";

const timeLineItemOne: TimeLine = {
  id: 1,
  year: "2015년",
  title: "백석대학교 입학",
  body: "ICT학부 정보보호학과 입학 및 정보보호 동아리(HUB) 가입",
  icon: "AccountBalance",
};
const timeLineItemTwo: TimeLine = {
  id: 5,
  year: "2018년 ~ 2019년",
  title: "Smart Mirror 개발",
  body: "하드웨어 및 소프트웨어 제작 / Full Stack 개발",
  textAlignLeft: true,
  skills: ["Vue.js", "Vuex", "Vuetify", "SocketIO", "Node.js(express)", "MongoDB"],
  functions: ["날씨", "시간", "미세먼지", "유튜브 영상 검색 및 재생", "영상 제어(멈춤, 시작, 10초 앞-뒤로 이동 등)", "영상 저장", "무드등 제어"],
  icon: "LaptopMac",
};

export const myTimeLineStub: MyTimeLineProps = {
  width: "lg",
  items: [timeLineItemOne, timeLineItemTwo],
};
