import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Typography, Card, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FA, IconSrc } from "../../config/Type";

type SkillCardItem = {
  fontAwesome?: FA;
  iconSrc?: IconSrc;
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
  licence: {
    textDecoration: "none",
    color: "inherit",
    opacity: 0.5,
    fontSize: "0.6rem",
  },
});

function SkillCardItem({ fontAwesome, iconSrc }: SkillCardItem) {
  const classes = useStyles();
  const title = fontAwesome ? fontAwesome.title : iconSrc?.title;
  return (
    <Grid item xs={12} md={2}>
      <Card className={classes.customCard}>
        {fontAwesome && (
          <FontAwesomeIcon icon={["fab", fontAwesome.fa]} size="5x" />
        )}
        {iconSrc && <img src={iconSrc.imageSrc} alt="test" />}
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <LinearProgress variant="determinate" value={75} />
        {iconSrc && (
          <a className={classes.licence} href={iconSrc.licenceSrc}>
            icon licence
          </a>
        )}
      </Card>
    </Grid>
  );
}

export default React.memo(SkillCardItem);
