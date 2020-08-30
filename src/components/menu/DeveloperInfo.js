import React from "react";
import { Grid, Divider, makeStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Anchor from "../common/Anchor";
import { developerInfo } from "../../config/GlobalVariables";

const useStyles = makeStyles((theme) => ({
  infoStyle: { textAlign: "center", margin: "24px 0 16px 0" },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  marginLeftRight: { margin: "0 10px" },
  forSpan: {
    fontSize: "2rem",
    color: "white",
  },
  image: {
    maxWidth: "120px",
    borderRadius: "50%",
  },
}));

const DeveloperInfo = () => {
  const { title, subTitle, content, icons, imageSrc } = developerInfo;
  console.log(developerInfo);
  const classes = useStyles();
  return (
    <div className={classes.infoStyle}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12} className={classes.marginLeftRight}>
          <img src={imageSrc} className={classes.image} alt="person" />
        </Grid>
        <Grid item xs={12} className={classes.marginLeftRight}>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.marginLeftRight}>
          <Typography variant="h5" component="h3">
            {subTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.marginLeftRight}>
          <Typography variant="body1">{content}</Typography>
        </Grid>
        {icons.map((icon, idx) => (
          <Grid item xs={4} key={idx}>
            <Anchor
              href={icon.href}
              icon={<FontAwesomeIcon icon={["fab", icon.icon]} />}
            />
          </Grid>
        ))}
      </Grid>
      <Divider />
    </div>
  );
};

export default DeveloperInfo;
