import React from "react";
import { useSelector } from "react-redux";
import { getProject } from "src/store/selector";
import ProjectCardList from "../components/project/ProjectCardList";
function ProjectContainer() {
  const state = useSelector(getProject);
  return (
    <>
      <ProjectCardList projectInfoList={state} />
    </>
  );
}

export default ProjectContainer;
