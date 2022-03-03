import React from "react";
import { Grid } from "@material-ui/core";
import SkillCardItem from "./SkillCardItem";
import { SkillsInfo } from "../../config/Type";

function SkillsCardList({ iconInfoList }: SkillsInfo) {
  return (
    <Grid container spacing={1}>
      {iconInfoList.map(iconInfo => (
        <SkillCardItem key={iconInfo.title} {...iconInfo} />
      ))}
    </Grid>
  );
}

export default SkillsCardList;
