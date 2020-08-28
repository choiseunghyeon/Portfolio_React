import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  decorationNone: {
    textDecoration: "none",
  },
});

const Anchor = ({ href, icon, children }) => {
  const classes = useStyles();
  if (children) {
    return (
      <a href={href} target="_blank" className={classes.decorationNone}>
        {children}
      </a>
    );
  } else {
    return (
      <a href={href} target="_blank" className={classes.decorationNone}>
        <IconButton>{icon}</IconButton>
      </a>
    );
  }
};

export default Anchor;