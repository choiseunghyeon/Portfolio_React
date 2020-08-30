import React from "react";
import clsx from "clsx";
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillFuncItems from "../common/SkillFuncItems";
import Anchor from "../common/Anchor";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProjectCardItem = React.memo(({ item }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {
    title,
    subtitle,
    description,
    skills,
    functions,
    icons,
    imageSrc,
  } = item;
  return (
    <Grid item xs={12} md={3} variant="outlined">
      <Card>
        <CardHeader title={title} subheader={subtitle} />
        <CardMedia
          image={imageSrc}
          title="Contemplative Reptile"
          className={classes.media}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {icons &&
            icons.map((icon, idx) => (
              <Anchor
                key={idx}
                href={icon.href}
                icon={<FontAwesomeIcon icon={["fab", icon.icon]} size="1x" />}
              />
            ))}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography component="div">
              <SkillFuncItems skills={skills} functions={functions} />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
});

export default ProjectCardItem;
