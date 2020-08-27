import React from "react";
import { projectInfo } from "../info.json";
import { ProjectCardList } from "../components/common/CardList";
// 포트폴리오 사이트, 플루터, 스마트미러
const Project = () => {
  return <ProjectCardList items={projectInfo} />;
};

export default Project;
