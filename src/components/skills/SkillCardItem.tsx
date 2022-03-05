import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconInfo } from "../../types/portfolio";
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

function SkillCardItem({ icon, href, title }: IconInfo) {
  const classes = useStyles();
  return (
    <Grid data-testid="skill" item xs={12} md={2}>
      <Card className={classes.customCard}>
        <Anchor icon={icon} href={href} fontSize="3.4rem" />
        <Typography noWrap variant="h5" component="h2">
          {title}
        </Typography>
        {/* <LinearProgress variant="determinate" value={75} /> */}
      </Card>
    </Grid>
  );
}

export default React.memo(SkillCardItem);
