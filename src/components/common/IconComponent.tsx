import React from "react";
import * as ReactIconSi from "react-icons/si";
import * as ReactIconFa from "react-icons/fa";
import * as MaterialIcon from "@material-ui/icons";
import { IconType } from "react-icons/lib";

function getIcon(iconName: string): IconType | MaterialIcon.SvgIconComponent | undefined {
  if (ReactIconSi[iconName]) return ReactIconSi[iconName];

  if (ReactIconFa[iconName]) return ReactIconFa[iconName];

  if (MaterialIcon[iconName]) return MaterialIcon[iconName];

  // return [ReactIconSi, ReactIconFa, MaterialIcon].find(icons => icons[iconName])
}

interface IconComponentProps {
  icon: string;
}

function IconComponent({ icon }: IconComponentProps) {
  const Component = getIcon(icon);

  if (!Component) return null;

  return <Component />;
}

export default IconComponent;
