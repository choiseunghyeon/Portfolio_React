import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import TypeIt from "typeit";

export default function Greeting() {
  useEffect(() => {
    new TypeIt("#typehere", {
      strings: ["Front End Developer", "Hi, This is my <b>portfolio</b> site"],
      speed: 30,
      waitUntilVisible: true,
    }).go();
  }, []);
  return <Typography data-testid="greeting" id="typehere" variant="h2" component="h2" align="center" gutterBottom></Typography>;
}
