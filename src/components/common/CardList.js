import React from "react";
import { Grid } from "@material-ui/core";
import ProjectCardItem from "./ProjectCardItem";
import SkillCardItem from "./SkillCardItem";

export const ProjectCardList = ({ items }) => {
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <ProjectCardItem key={item.title} item={item} />
      ))}
    </Grid>
  );
};

export const SkillsCardList = ({ items }) => {
  const { fontAwesomeArray, iconSrcArray } = items;
  return (
    <Grid container spacing={1}>
      {fontAwesomeArray.map((fontAwesome) => (
        <SkillCardItem
          fontAwesome={fontAwesome.fa}
          title={fontAwesome.title}
          key={fontAwesome.fa}
        />
      ))}
      {iconSrcArray.map((icons) => (
        <SkillCardItem
          imageSrc={icons.imageSrc}
          licenceSrc={icons.licenceSrc}
          title={icons.title}
          key={icons.imageSrc}
        />
      ))}
    </Grid>
  );
};
