import React from "react";
import { Grid } from "@material-ui/core";
import SkillCardItem from "./SkillCardItem";
import { SkillsInfo } from "../../config/Type";

type SkillsCardListProps = {
  items: SkillsInfo;
};

function SkillsCardList({ items }: SkillsCardListProps) {
  const { fontAwesomeArray, iconSrcArray } = items;
  return (
    <Grid container spacing={1}>
      {fontAwesomeArray.map((fontAwesome) => (
        <SkillCardItem fontAwesome={fontAwesome} key={fontAwesome.fa} />
      ))}
      {iconSrcArray.map((iconSrc) => (
        <SkillCardItem iconSrc={iconSrc} key={iconSrc.imageSrc} />
      ))}
    </Grid>
  );
}

export default SkillsCardList;
