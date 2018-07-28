import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./components/App";

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/App", render);
}
