import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export interface CustomAppBarProps {
  handleDrawerToggle: (windowWidth: number) => void;
  handleMode: () => void;
  darkMode: boolean;
  title: string;
}

export default function CustomAppBar({ title, handleDrawerToggle, handleMode, darkMode }: CustomAppBarProps) {
  const onClick = (event: any) => {
    handleDrawerToggle(event.view.innerWidth);
  };
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            sx={{
              display: { xs: "block", sm: "none" },
            }}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onClick}>
            <AccountCircle fontSize="large" />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button data-testid="theme" style={darkMode ? { color: "white" } : { color: "black" }} onClick={() => handleMode()}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
