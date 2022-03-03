import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconInfo } from "../../config/Type";
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
type AnchorProps = IconInfo & {
  fontSize?: string;
};

type StyleProps = {
  size: string | undefined;
};
const useStyles = makeStyles<unknown, StyleProps>({
  anchorStyle: {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: props => props.size,
    color: "inherit",
    marginBottom: "10px",
  },
});

const Anchor = ({ icon, href, fontSize }: AnchorProps) => {
  const styleProps: StyleProps = { size: fontSize };
  const classes = useStyles(styleProps);
  const IconComponent = getIcon(icon);
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes.anchorStyle}>
        {IconComponent && <IconComponent />}
      </a>
    );
  } else {
    return <div className={classes.anchorStyle}>{IconComponent && <IconComponent />}</div>;
  }
};

Anchor.defaultProps = {
  size: "2rem",
};
export default React.memo(Anchor);
