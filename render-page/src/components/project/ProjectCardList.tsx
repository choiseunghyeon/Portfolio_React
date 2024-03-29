import React from "react";
import { Grid } from "@mui/material";
import ProjectCardItem from "./ProjectCardItem";
import { ProejctInfo } from "../../types/portfolio";
type ProjectCardListProps = {
  projectInfoList: ProejctInfo[];
};

function ProjectCardList({ projectInfoList }: ProjectCardListProps) {
  return (
    <Grid container spacing={1}>
      {projectInfoList.map(projectInfo => (
        <Grid data-testid="projectCardItem" key={projectInfo.title} item xs={12} md={4}>
          <ProjectCardItem {...projectInfo} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectCardList;
