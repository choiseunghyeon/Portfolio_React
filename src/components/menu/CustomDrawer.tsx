import React from "react";
import { Drawer, Hidden, Theme } from "@material-ui/core";
import DeveloperProfile from "./DeveloperProfile";
import VerticalTabs from "./VerticalTabs";
import useCustomStyles from "../../styles/Material-UI/style";
import { DeveloperInfo } from "../../config/Type";

type CustomDrawerProps = {
  handleDrawerToggle: (windowWidth: number) => void;
  theme: Theme;
  mobileOpen: boolean;
  developerInfo: DeveloperInfo;
  tabTitles: string[];
  activeTabTitle: string;
  onChangeTab: Function;
};

export default function CustomDrawer({ handleDrawerToggle, theme, mobileOpen, developerInfo, tabTitles, activeTabTitle, onChangeTab }: CustomDrawerProps) {
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
          }}>
          <DeveloperProfile {...developerInfo} />
          <VerticalTabs handleDrawerToggle={handleDrawerToggle} tabTitles={tabTitles} activeTabTitle={activeTabTitle} onChangeTab={onChangeTab} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open>
          <DeveloperProfile {...developerInfo} />
          <VerticalTabs handleDrawerToggle={handleDrawerToggle} tabTitles={tabTitles} activeTabTitle={activeTabTitle} onChangeTab={onChangeTab} />
        </Drawer>
      </Hidden>
    </>
  );
}
