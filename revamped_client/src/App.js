import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import NavBarContainer from "./components/common/NavBarContainer";
import Home from "./components/home/";
import Support from "./components/support/";
import About from "./components/about/";
import SignUp from "./components/signup/";

function App() {
  const NavBar = withRouter(props => <NavBarContainer {...props} />);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/support" component={Support} />
        <Route path="/about" component={About} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
