import { Grid, Divider, Typography, Theme, Box } from "@mui/material";
import { useQuery } from "react-query";
import { fetchGitUser } from "../../api/http/git";
import { IGitUser } from "src/types/response";
import { useSelector } from "react-redux";
import IconComponent from "../common/IconComponent";

const DeveloperGitProfile = () => {
  const username = useSelector(state => state.app.git.username);
  const { status, data, error } = useQuery<IGitUser>(["git", "users", username], async () => {
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
        <Box sx={{ textAlign: "center", margin: "24px 0 16px 0" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ margin: "0 10px" }}>
              <img
                src={data.avatar_url}
                style={{
                  maxWidth: "120px",
                  borderRadius: "50%",
                }}
                alt="person"
              />
            </Grid>
            <Grid item xs={12} sx={{ margin: "0 10px" }}>
              <Typography variant="h5" component="h3">
                {data.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ margin: "0 10px" }}>
              <Typography color="textSecondary" gutterBottom>
                {data.login}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ margin: "0 10px" }}>
              <Typography color="textPrimary" gutterBottom>
                {data.bio}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <IconComponent icon="SiGithub" href={data.html_url} fontSize="1.5rem" />
            </Grid>
            <Grid item xs={4}>
              <IconComponent icon="FaLink" href={data.blog} fontSize="1.5rem" />
            </Grid>
          </Grid>
          <Divider />
        </Box>
      )}
    </>
  );
};

export default DeveloperGitProfile;
