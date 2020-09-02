import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Typography, Card, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const SkillCardItem = React.memo(
  ({ fontAwesome, imageSrc, licenceSrc, title }) => {
    const classes = useStyles();
    return (
      <Grid item xs={12} md={2} variant="outlined">
        <Card className={classes.customCard}>
          {fontAwesome && (
            <FontAwesomeIcon icon={["fab", fontAwesome]} size="5x" />
          )}
          {imageSrc && <img src={imageSrc} alt="test" />}
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          {licenceSrc && (
            <a className={classes.licence} href={licenceSrc}>
              icon licence
            </a>
          )}
        </Card>
      </Grid>
    );
  }
);

export default SkillCardItem;
