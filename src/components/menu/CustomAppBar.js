import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useCustomStyles from "../../styles/Material-UI/style";

export default function CustomDrawer({
  handleDrawerToggle,
  handleMode,
  darkMode,
}) {
  const classes = useCustomStyles();
  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.accountButton}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Typography variant="h5" className={classes.content}>
            Portfolio
          </Typography>
          <Button variant="contained" onClick={() => handleMode()}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
