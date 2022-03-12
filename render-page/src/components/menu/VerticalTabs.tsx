import { Tabs, Tab } from "@mui/material";

function a11yProps(index: number): any {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    key: index,
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
    // 현재 window 크기 전달
    handleDrawerToggle();
  };

  return (
    <Tabs orientation="vertical" variant="scrollable" value={activeTabTitle} onChange={handleChange} aria-label="Vertical tabs">
      {tabTitles.map((title: string, idx: number) => (
        <Tab data-testid="tab" value={title} label={title} {...a11yProps(idx)} />
      ))}
    </Tabs>
  );
}
