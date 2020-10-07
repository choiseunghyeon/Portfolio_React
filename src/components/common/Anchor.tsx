import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconInfo } from "../../config/Type";

type AnchorProps = {
  iconInfo: IconInfo;
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
    fontSize: (props) => props.size,
    color: "inherit",
    marginBottom: "10px",
  },
});

const Anchor = ({ iconInfo, fontSize }: AnchorProps) => {
  const styleProps: StyleProps = { size: fontSize };
  const classes = useStyles(styleProps);

  const { href, icon } = iconInfo;
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.anchorStyle}
      >
        {icon}
      </a>
    );
  } else {
    return <div className={classes.anchorStyle}>{icon}</div>;
  }
};

Anchor.defaultProps = {
  size: "2rem",
};
export default React.memo(Anchor);
