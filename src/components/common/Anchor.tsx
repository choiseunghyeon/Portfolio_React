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
  decorationNone: {
    textDecoration: "none",
    fontSize: (props) => props.size,
    color: "inherit",
  },
});

const Anchor = ({ iconInfo, fontSize }: AnchorProps) => {
  const styleProps = { size: fontSize };
  const classes = useStyles(styleProps);

  const { href, icon } = iconInfo;
  if (href) {
    return (
      <a href={href} target="_blank" className={classes.decorationNone}>
        {icon}
      </a>
    );
  } else {
    return <a className={classes.decorationNone}>{icon}</a>;
  }
};

Anchor.defaultProps = {
  size: "2rem",
};
export default React.memo(Anchor);
