import React from "react";
import ProjectCardList from "../components/project/ProjectCardList";
function ProjectContainer({ state }: any) {
  return (
    <>
      <ProjectCardList projectInfoList={state} />
    </>
  );
}

export default ProjectContainer;
