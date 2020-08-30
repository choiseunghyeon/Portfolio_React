import React from "react";
import MyTimeLine from "../components/info/MyTimeLine";
import {
  EmojiPeople,
  LaptopMac,
  AccountBalance,
  Https,
  AccountCircle,
} from "@material-ui/icons";
import { projectInfo } from "../config/GlobalVariables";
import SkillFuncItems from "../components/common/SkillFuncItems";
import Greeting from "../components/info/Greeting";

const timeLineItems = [
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
    id: 4,
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
    body: "BOB5기 교육 이수 및 웹 해킹 및 보안 프로젝트 진행",
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
    icon: <AccountCircle />,
  },
];

const InfoPage = () => {
  return (
    <>
      <Greeting />
      <MyTimeLine items={timeLineItems} />
    </>
  );
};

export default InfoPage;
