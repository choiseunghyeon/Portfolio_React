import React from "react";
import { projectInfo } from "../config/GlobalVariables";
import { ProjectCardList } from "../components/common/CardList";
const Project = () => {
  return <ProjectCardList items={projectInfo} />;
};

export default Project;
