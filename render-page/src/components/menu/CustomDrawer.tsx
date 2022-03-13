import React from "react";
import { Direction, Drawer, Hidden, Theme, Toolbar } from "@mui/material";
import DeveloperProfile from "./DeveloperProfile";
import VerticalTabs from "./VerticalTabs";
import { DeveloperInfo } from "../../types/portfolio";
import DeveloperGitProfile from "./DeveloperGitProfile";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface CustomDrawerProps {
  handleDrawerToggle: Function;
  direction: Direction;
  mobileOpen: boolean;
  developerInfo: DeveloperInfo;
  tabTitles: string[];
  activeTabTitle: string;
  onChangeTab: Function;
}

const drawerWidth = 240;
// const container = window !== undefined ? () => window().document.body : undefined;
export default function CustomDrawer({ handleDrawerToggle, direction, mobileOpen, developerInfo, tabTitles, activeTabTitle, onChangeTab }: CustomDrawerProps) {
  const theme = useTheme();
  const isMobileWidth = useMediaQuery(theme.breakpoints.down("sm"));

  const onClose = (event: any) => {
    handleDrawerToggle();
  };
  return (
    <>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      {/* Mobile 전용 Drawer */}
      {isMobileWidth && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}>
          {/* AppBar의 Toolbar 크기 만큼의 공백 용도 */}
          <Toolbar />
          {/* <DeveloperGitProfile /> */}
          <DeveloperProfile {...developerInfo} />
          <VerticalTabs handleDrawerToggle={handleDrawerToggle} tabTitles={tabTitles} activeTabTitle={activeTabTitle} onChangeTab={onChangeTab} />
        </Drawer>
      )}

      {/* PC 전용 Drawer */}
      {!isMobileWidth && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
            display: { xs: "none", sm: "block" },
          }}>
          {/* AppBar의 Toolbar 크기 만큼의 공백 용도 */}
          <Toolbar />
          {/* <DeveloperGitProfile /> */}
          <DeveloperProfile {...developerInfo} />
          <VerticalTabs handleDrawerToggle={handleDrawerToggle} tabTitles={tabTitles} activeTabTitle={activeTabTitle} onChangeTab={onChangeTab} />
        </Drawer>
      )}
    </>
  );
}
