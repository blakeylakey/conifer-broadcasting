import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import NavBarContainer from "./components/common/NavBarContainer";
import Support from "./components/support/Support";

function App() {
  const NavBar = withRouter(props => <NavBarContainer {...props} />);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/support" component={Support} />
      </Switch>
    </Router>
  );
}

export default App;
