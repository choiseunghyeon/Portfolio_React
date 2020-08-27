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
});

const SkillCardItem = React.memo(
  ({ fontAwesome, imageSrc, licenceSrc, title }) => {
    const classes = useStyles();
    return (
      <Grid item xs={12} md={2} variant="outlined">
        <Card className={classes.customCard}>
          <CardActionArea>
            {fontAwesome && (
              <FontAwesomeIcon icon={["fab", fontAwesome]} size="5x" />
            )}
            {imageSrc && <img src={imageSrc} alt="test" />}
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            {/* {licenceSrc && (
            <a href="https://icons8.com/icon/74402/mongodb">
            MongoDB icon by Icons8
            </a>
          )} */}
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
);

export default SkillCardItem;
