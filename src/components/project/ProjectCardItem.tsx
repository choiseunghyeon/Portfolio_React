import React, { useState } from "react";
import clsx from "clsx";
import { Grid, Card, CardHeader, CardActions, CardContent, CardMedia, Collapse, Typography, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import SkillFuncItems from "../common/SkillFuncItems";
import Anchor from "../common/Anchor";
import { ProejctInfo } from "../../config/Type";

type ProjectCardItemProps = {
  item: ProejctInfo;
};

const useStyles = makeStyles(theme => ({
  headerRoot: {
    display: "flex",
    padding: "16px 16px 0 16px",
    alignItems: "center",
  },
  bottomPaddingZero: {
    padding: "16px 16px 0 16px",
  },
  mediaBox: {
    height: "300px",
  },
  mediaFill: {
    height: "100%",
    objectFit: "fill",
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
  iconStyle: {
    color: "inherit",
    fontSize: "1.5rem",
  },
}));

function ProjectCardItem({ item }: ProjectCardItemProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  if (item === undefined) return null;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { title, subtitle, description, skills, functions, icons, imageSrc } = item;
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <div className={classes.mediaBox}>{imageSrc && <CardMedia image={imageSrc} title="project image" component="img" className={classes.mediaFill} />}</div>
        <CardHeader title={title} subheader={subtitle} className={classes.bottomPaddingZero} />
        <CardContent className={classes.bottomPaddingZero}>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {icons &&
            icons.map((icon, index) => (
              <div key={index} style={{ padding: "0 8px" }}>
                <Anchor iconInfo={icon} fontSize="1.45rem" />
              </div>
            ))}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
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
}

export default React.memo(ProjectCardItem);
