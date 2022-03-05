import React from "react";
import { useSelector } from "react-redux";
import { selectProject } from "src/store/selector";
import ProjectCardList from "../components/project/ProjectCardList";
function ProjectContainer() {
  const state = useSelector(selectProject);
  return (
    <>
      <ProjectCardList projectInfoList={state} />
    </>
  );
}

export default ProjectContainer;
