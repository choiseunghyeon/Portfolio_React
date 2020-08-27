import React from "react";
import { Grid, Typography, Card, CardActionArea } from "@material-ui/core";
import ProjectCardItem from "./ProjectCardItem";
import SkillCardItem from "./SkillCardItem";
const fontAwesomeArray = [
  {
    title: "HTML5",
    fa: "html5",
  },
  {
    title: "CSS3",
    fa: "css3-alt",
  },
  {
    title: "JavaScript",
    fa: "js",
  },
  {
    title: "Vue",
    fa: "vuejs",
  },
  {
    title: "React",
    fa: "react",
  },
  {
    title: "Node",
    fa: "node",
  },
];
const iconSrcArray = [
  {
    imageSrc: "https://img.icons8.com/color/58/000000/flutter.png",
    licenceSrc: "https://icons8.com/icon/7I3BjCqe9rjG/flutter",
    title: "Flutter",
  },
  {
    imageSrc: "https://img.icons8.com/ios-filled/58/000000/jquery.png",
    licenceSrc: "https://icons8.com/icon/40253/jquery",
    title: "jQuery",
  },
  {
    imageSrc: "https://img.icons8.com/color/58/000000/mongodb.png",
    licenceSrc: "https://icons8.com/icon/74402/mongodb",
    title: "MongoDB",
  },
];

export const ProjectCardList = ({ items }) => {
  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <ProjectCardItem key={item.title} item={item} />
      ))}
    </Grid>
  );
};

export const SkillsCardList = ({ children }) => {
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
