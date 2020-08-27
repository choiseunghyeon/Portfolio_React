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
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import test from "../../styles/images/test.jpg";
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
  const { title, description } = item;
  return (
    <Grid item xs={12} md={3} variant="outlined">
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={test}
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
          <Anchor href="https://github.com/choiseunghyeon/">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<GitHubIcon />}
            >
              github
            </Button>
          </Anchor>
        </CardActions>
      </Card>
    </Grid>
  );
});

export default ProjectCardItem;
