import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

//fontawesome setting
library.add(fab);

// MUI drark Theme setting
let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// for Responsive font size
darkTheme = responsiveFontSizes(darkTheme);

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
