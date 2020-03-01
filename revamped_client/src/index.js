import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import setupStore from "./redux/setupStore";
import { Provider } from "react-redux";

const store = setupStore();

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
