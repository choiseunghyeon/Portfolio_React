import React from "react";
import { Grid } from "@material-ui/core";
import SkillCardItem from "./SkillCardItem";
import { SkillsInfo } from "../../config/Type";
type SkillsCardListProps = {
  items: SkillsInfo;
};

function SkillsCardList({ items }: SkillsCardListProps) {
  const { iconInfoArray } = items;
  return (
    <Grid container spacing={1}>
      {iconInfoArray.map((iconInfo) => (
        <SkillCardItem iconInfo={iconInfo} key={iconInfo.title} />
      ))}
    </Grid>
  );
}

export default SkillsCardList;
