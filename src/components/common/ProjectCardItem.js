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
    height: 210,
  },
  borderNone: {
    textDecoration: "none",
  },
});

const ProjectCardItem = React.memo(({ item }) => {
  const classes = useStyles();
  //const {title, description, imgSrc, iconSrc} = item;
  const { title, description, icons, imageSrc } = item;
  return (
    <Grid item xs={12} md={3} variant="outlined">
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageSrc}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {icons &&
            icons.map((icon, idx) => (
              <Anchor
                key={idx}
                href={icon.href}
                icon={<FontAwesomeIcon icon={["fab", icon.icon]} size="2x" />}
              />
            ))}
        </CardActions>
      </Card>
    </Grid>
  );
});

export default ProjectCardItem;
