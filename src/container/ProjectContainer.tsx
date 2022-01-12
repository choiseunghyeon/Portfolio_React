import React from "react";
import ProjectCardList from "../components/project/ProjectCardList";
function ProjectContainer({ state }: any) {
  return (
    <>
      <ProjectCardList items={state} />
    </>
  );
}

export default ProjectContainer;
