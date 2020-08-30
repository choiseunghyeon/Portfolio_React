import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
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

let darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
darkTheme = responsiveFontSizes(darkTheme);

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
