import React from "react";
import { Grid } from "@material-ui/core";
import SkillCardItem from "./SkillCardItem";

function SkillsCardList({ items }) {
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
}

export default SkillsCardList;
