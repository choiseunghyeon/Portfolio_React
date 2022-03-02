import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import TypeIt from "typeit";

export default function Greeting() {
  useEffect(() => {
    new TypeIt("#typehere", {
      speed: 30,
      waitUntilVisible: true,
    })
      .type("Full Stack Developer", { delay: 600 })
      .move(-10)
      .pause(300)
      .delete(-10)
      .pause(400)
      .type("Front End")
      .pause(400)
      .move(10)
      .break({ delay: 500 })
      .type("Hi, This is my <b>portfolio</b> site")
      .go();
  }, []);
  return <Typography data-testid="greeting" id="typehere" variant="h2" component="h2" align="center" gutterBottom></Typography>;
}
