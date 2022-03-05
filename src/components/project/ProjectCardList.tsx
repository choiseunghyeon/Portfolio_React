import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCardItem from "./ProjectCardItem";
import { ProejctInfo } from "../../types/portfolio";
type ProjectCardListProps = {
  projectInfoList: ProejctInfo[];
};

function ProjectCardList({ projectInfoList }: ProjectCardListProps) {
  return (
    <Grid container spacing={1}>
      {projectInfoList.map(projectInfo => (
        <ProjectCardItem key={projectInfo.title} {...projectInfo} />
      ))}
    </Grid>
  );
}

export default ProjectCardList;
