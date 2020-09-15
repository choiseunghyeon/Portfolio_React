import React from "react";
import { Grid, Typography, Card, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconInfo } from "../../config/Type";
import Anchor from "../common/Anchor";

type SkillCardItem = {
  iconInfo: IconInfo;
};

const useStyles = makeStyles({
  flexWithContentCenter: {
    display: "flex",
    justifyContent: "center",
  },
  customCard: {
    textAlign: "center",
    padding: "10px",
  },
});

function SkillCardItem({ iconInfo }: SkillCardItem) {
  const classes = useStyles();
  const { title } = iconInfo;
  return (
    <Grid item xs={12} md={2}>
      <Card className={classes.customCard}>
        <Anchor iconInfo={iconInfo} fontSize="3.4rem" />
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <LinearProgress variant="determinate" value={75} />
      </Card>
    </Grid>
  );
}

export default React.memo(SkillCardItem);
