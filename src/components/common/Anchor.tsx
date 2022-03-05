import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconComponent from "./IconComponent";
import { IconInfo } from "src/types/portfolio";

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
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes.anchorStyle}>
        <IconComponent icon={icon} />
      </a>
    );
  } else {
    return (
      <div className={classes.anchorStyle}>
        <IconComponent icon={icon} />
      </div>
    );
  }
};

Anchor.defaultProps = {
  size: "2rem",
};
export default React.memo(Anchor);
