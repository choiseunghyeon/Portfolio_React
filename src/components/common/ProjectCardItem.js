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
import SkillFuncItems from "./SkillFuncItems";
import Anchor from "./Anchor";

const useStyles = makeStyles({
  media: {
    height: "240px",
    objectFit: "contain",
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
    border: "1px solid #fff",
    height: "240px",
  },
});

const ProjectCardItem = React.memo(({ item }) => {
  const classes = useStyles();
  //const {title, description, imgSrc, iconSrc} = item;
  const { title, skills, functions, icons, imageSrc } = item;
  return (
    <Grid item xs={12} md={3} variant="outlined">
      <Card>
        <CardMedia
          component="img"
          image={imageSrc}
          title="Contemplative Reptile"
          className={classes.media}
        />
        {/*<CardMedia
          className={classes.media}
          image={imageSrc}
          title="Contemplative Reptile"
        />*/}
        <CardContent className={classes.nonePaddingBottom}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <SkillFuncItems skills={skills} functions={functions} />
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
