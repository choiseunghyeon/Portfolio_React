import React from "react";
import ProjectCardList from "../components/project/ProjectCardList";
import { projectInfo } from "../config/GlobalVariables";

function ProjectPage() {
  return (
    <>
      <ProjectCardList items={projectInfo} />
    </>
  );
}

export default ProjectPage;
