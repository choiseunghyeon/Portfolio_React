import React from "react";
import { Grid, Divider, makeStyles, Typography } from "@material-ui/core";
import Anchor from "../common/Anchor";
import { DeveloperInfo } from "../../types/portfolio";
import { useQuery } from "react-query";
import { getGitUser } from "src/api/http/git";
import axios from "axios";

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
  const { status, data, error, isFetching } = useQuery("posts", async () => {
    const data = await getGitUser("choiseunghyeon");
    // const { data } = await axios.get("https:/api.gitub.com/users/choiseunghyeon");
    // getGitUser("choiseunghyeon");
    return data;
  });
  return (
    <>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error</span>
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
                {data.bio}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Anchor icon="SiGithub" href={data.html_url} fontSize="1.5rem" />
              <Typography component="span">{data.name}</Typography>
            </Grid>

            {/* {icons.map((icon, idx) => (
            ))} */}
          </Grid>
          <Divider />
        </div>
      )}
    </>
  );
};

export default DeveloperGitProfile;
