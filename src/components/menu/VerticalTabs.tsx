import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  // max-width가 264px로 되어 있음 따라서 레이아웃에서 중간에 위치하지 못함
  maxWidth: {
    maxWidth: "inherit",
  },
}));

function a11yProps(index: number): any {
  // const path = tabItems[index].toLowerCase() + "Path";
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    key: index,
    // to: routerPath[path][0],
  };
}

interface VerticalTabsProps {
  handleDrawerToggle: (windowWidth: number) => void;
  tabTitles: string[];
  activeTabTitle: string;
  onChangeTab: Function;
}

export default function VerticalTabs({ tabTitles, activeTabTitle, onChangeTab, handleDrawerToggle }: any) {
  const classes = useStyles();
  const handleChange = (event: any, newValue: number) => {
    onChangeTab(event, newValue);
    // 현재 window 크기 전달
    handleDrawerToggle(event.view.innerWidth);
  };

  return (
    <Tabs orientation="vertical" variant="scrollable" value={activeTabTitle} onChange={handleChange} aria-label="Vertical tabs">
      {tabTitles.map((title: string, idx: number) => (
        <Tab data-testid="tab" value={title} className={classes.maxWidth} label={title} {...a11yProps(idx)} />
      ))}
    </Tabs>
  );
}
