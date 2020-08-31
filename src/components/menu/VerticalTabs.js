import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { routerPath } from "../../config/GlobalVariables";
const useStyles = makeStyles(() => ({
  // max-width가 264px로 되어 있음 따라서 레이아웃에서 중간에 위치하지 못함
  maxWidth: {
    maxWidth: "inherit",
  },
}));

const tabItems = ["Info", "Project", "Skills"];
function a11yProps(index) {
  const path = tabItems[index].toLowerCase() + "Path";
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    key: index,
    to: routerPath[path][0],
  };
}

export default function VerticalTabs({ handleDrawerToggle }) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // 현재 window 크기 전달
    handleDrawerToggle(event.view.innerWidth);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
    >
      {tabItems.map((text, idx) => (
        <Tab
          className={classes.maxWidth}
          label={text}
          {...a11yProps(idx)}
          component={Link}
        />
      ))}
    </Tabs>
  );
}
