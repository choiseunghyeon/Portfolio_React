import React from "react";
import { Drawer, Hidden, Theme } from "@material-ui/core";
import DeveloperInfo from "./DeveloperInfo";
import VerticalTabs from "./VerticalTabs";
import useCustomStyles from "../../styles/Material-UI/style";

type CustomDrawerProps = {
  handleDrawerToggle: (windowWidth: number) => void;
  theme: Theme;
  mobileOpen: boolean;
};

export default function CustomDrawer({
  handleDrawerToggle,
  theme,
  mobileOpen,
}: CustomDrawerProps) {
  const classes = useCustomStyles();
  const onClose = (event: any) => {
    handleDrawerToggle(event.view.innerWidth);
  };
  return (
    <>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DeveloperInfo />
          <VerticalTabs handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DeveloperInfo />
          <VerticalTabs handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
    </>
  );
}
