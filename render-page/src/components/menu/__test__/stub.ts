import { DeveloperInfo } from "../../../types/portfolio";
import { CustomAppBarProps } from "../CustomAppBar";
import { CustomDrawerProps } from "../CustomDrawer";
import { VerticalTabsProps } from "../VerticalTabs";
export const developerInfoStub: DeveloperInfo = {
  title: "Front End Developer",
  subtitle: "최승현",
  content: "",
  imageSrc: `/profilePicture.jpg`,
  icons: [
    {
      href: "https://github.com/choiseunghyeon/",
      icon: "FaGithub",
    },
    {
      href: "https://webigotr.tistory.com/",
      icon: "FaBloggerB",
    },
    {
      href: "https://www.instagram.com/chshyeon_0_0/?hl=ko",
      icon: "FaInstagram",
    },
  ],
};

export const verticalTabsStub: VerticalTabsProps = {
  tabTitles: ["INFO", "PROJECT", "SKILLS"],
  activeTabTitle: "INFO",
  handleDrawerToggle: () => {},
  onChangeTab: () => {},
};

export const AppBarStub: CustomAppBarProps = {
  darkMode: true,
  title: "Portfolio",
  handleDrawerToggle: () => {},
  handleMode: () => {},
};

export const DrawerStub: CustomDrawerProps = {
  ...verticalTabsStub,
  developerInfo: developerInfoStub,
  direction: "ltr",
  mobileOpen: false,
};
