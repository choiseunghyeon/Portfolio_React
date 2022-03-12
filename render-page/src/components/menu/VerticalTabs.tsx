import { Tabs, Tab } from "@mui/material";

function a11yProps(title: string): any {
  return {
    id: `vertical-tab-${title}`,
    "aria-controls": `vertical-tabpanel-${title}`,
    key: title,
  };
}

export interface VerticalTabsProps {
  tabTitles: string[];
  activeTabTitle: string;
  onChangeTab: Function;
  handleDrawerToggle: Function;
}

export default function VerticalTabs({ tabTitles, activeTabTitle, onChangeTab, handleDrawerToggle }: VerticalTabsProps) {
  const handleChange = (event: any, newValue: number) => {
    onChangeTab(event, newValue);
    handleDrawerToggle();
  };

  return (
    <Tabs orientation="vertical" variant="scrollable" value={activeTabTitle} onChange={handleChange} aria-label="Vertical tabs">
      {tabTitles.map((title: string, idx: number) => (
        <Tab data-testid="tab" value={title} label={title} {...a11yProps(title)} />
      ))}
    </Tabs>
  );
}
