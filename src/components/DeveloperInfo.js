import React from "react";
import { Grid, Divider, makeStyles, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "../logo.svg";
import Anchor from "./common/Anchor";
import { developerInfo } from "../info.json";

const useStyles = makeStyles((theme) => ({
  textAlignCenter: { textAlign: "center" },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  marginLeftRight: { margin: "0 10px" },
  forSpan: {
    fontSize: "2rem",
    color: "white",
  },
}));

const DeveloperInfo = () => {
  const { title, subTitle, content } = developerInfo;
  const classes = useStyles();
  return (
    <div className={classes.textAlignCenter}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12} className={classes.marginLeftRight}>
          <img src={logo} className="App-logo" alt="logo" />
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

        <Grid item xs={4}>
          <Anchor
            href="https://github.com/choiseunghyeon/"
            icon={<GitHubIcon />}
          />
        </Grid>
        <Grid item xs={4}>
          <Anchor
            href="https://webigotr.tistory.com/"
            icon={<FontAwesomeIcon icon={["fab", "blogger-b"]} />}
          />
        </Grid>
        <Grid item xs={4}>
          <Anchor
            href="https://www.instagram.com/chshyeon_0_0/?hl=ko"
            icon={<InstagramIcon />}
          />
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
};

export default DeveloperInfo;
