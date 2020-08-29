import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Icon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Anchor from "./Anchor";

const useStyles = makeStyles({
  media: {
    height: "280px",
  },
  borderNone: {
    textDecoration: "none",
  },
  nonePaddingTop: {
    padding: "0 8px 8px 8px",
  },
  nonePaddingBottom: {
    padding: "16px 16px 0px 16px",
  },
  marginBlockStartZero: {
    marginBlockStart: 0,
  },
  imageContainer: {
    width: "80%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
});

const ProjectCardItem = React.memo(({ item }) => {
  const classes = useStyles();
  //const {title, description, imgSrc, iconSrc} = item;
  const { title, skills, functions, icons, imageSrc } = item;
  return (
    <Grid item xs={12} md={3} variant="outlined">
      <Card>
        {/* <div className={classes.imageContainer}>
          </div> */}
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.nonePaddingBottom}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            사용 기술:
            <ul className={classes.marginBlockStartZero}>
              {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
            주요 기능:
            <ul className={classes.marginBlockStartZero}>
              {functions && functions.map((func) => <li key={func}>{func}</li>)}
            </ul>
          </Typography>
        </CardContent>
        <CardActions className={classes.nonePaddingTop}>
          {icons &&
            icons.map((icon, idx) => (
              <Anchor
                key={idx}
                href={icon.href}
                icon={<FontAwesomeIcon icon={["fab", icon.icon]} size="1x" />}
              />
            ))}
        </CardActions>
      </Card>
    </Grid>
  );
});

export default ProjectCardItem;
