import React from "react";
import { Grid } from "@mui/material";
import SkillCardItem from "./SkillCardItem";
import { SkillsInfo } from "../../types/portfolio";

function SkillsCardList({ iconInfoList }: SkillsInfo) {
  return (
    <Grid container spacing={1}>
      {iconInfoList.map(iconInfo => (
        <Grid data-testid="skill" item xs={12} md={2}>
          <SkillCardItem key={iconInfo.title} {...iconInfo} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SkillsCardList;
