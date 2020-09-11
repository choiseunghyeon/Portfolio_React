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

type CustomDrawerProps = {
  handleDrawerToggle: (windowWidth: number) => void;
  handleMode: () => void;
  darkMode: boolean;
};

export default function CustomDrawer({
  handleDrawerToggle,
  handleMode,
  darkMode,
}: CustomDrawerProps) {
  const classes = useCustomStyles();
  const onClick = (event: any) => {
    handleDrawerToggle(event.view.innerWidth);
  };
  return (
    <>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}
            className={classes.accountButton}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Typography variant="h5" className={classes.content}>
            Portfolio
          </Typography>
          <Button
            style={darkMode ? { color: "white" } : { color: "black" }}
            onClick={() => handleMode()}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
