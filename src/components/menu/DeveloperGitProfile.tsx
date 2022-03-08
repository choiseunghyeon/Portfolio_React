import React from "react";
import { Grid, Divider, makeStyles, Typography } from "@material-ui/core";
import { useQuery } from "react-query";
import { fetchGitUser } from "../../api/http/git";
import { IGitUser } from "src/types/response";
import { useSelector } from "react-redux";
import Anchor from "../common/Anchor";
import IconComponent from "../common/IconComponent";

const useStyles = makeStyles(theme => ({
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

const DeveloperGitProfile = () => {
  const classes = useStyles();
  const username = useSelector(state => state.app.git.username);
  const { status, data, error, isFetching } = useQuery<IGitUser>(["git", "users", username], async () => {
    const data = await fetchGitUser(username);
    if (data === undefined) {
      throw new Error("data is undefined");
    }
    return data;
  });
  return (
    <>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" || data === undefined ? (
        <span>Error: ${error}</span>
      ) : (
        <div className={classes.infoStyle}>
          <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
            <Grid item xs={12} className={classes.marginLeftRight}>
              <img src={data.avatar_url} className={classes.image} alt="person" />
            </Grid>
            <Grid item xs={12} className={classes.marginLeftRight}>
              <Typography variant="h5" component="h3">
                {data.name}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.marginLeftRight}>
              <Typography color="textSecondary" gutterBottom>
                {data.login}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.marginLeftRight}>
              <Typography color="textPrimary" gutterBottom>
                {data.bio}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Anchor icon="SiGithub" href={data.html_url} fontSize="1.5rem" />
            </Grid>
            <Grid item xs={4}>
              <Anchor icon="FaLink" href={data.blog} fontSize="1.5rem" />
            </Grid>
          </Grid>
          <Divider />
        </div>
      )}
    </>
  );
};

export default DeveloperGitProfile;
