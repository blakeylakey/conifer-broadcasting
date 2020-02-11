import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./css/index.css";

import Home from "./components/pages/Home";
import Room from "./components/pages/Room";
import Unmatched from "./components/pages/Unmatched";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/room/:id" component={Room} />
      <Route component={Unmatched} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
