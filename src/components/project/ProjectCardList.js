import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCardItem from "./ProjectCardItem";

function ProjectCardList({ items }) {
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <ProjectCardItem key={item.title} item={item} />
      ))}
    </Grid>
  );
}

export default ProjectCardList;
