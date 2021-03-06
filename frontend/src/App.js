import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./middleware/PrivateRoute";
import DefaultRoute from "./middleware/DefaultRoute";
import * as ROUTES from "./routes";

import Login from "./components/authentication/login";
import Register from "./components/authentication/register";
import LandingPage from "./views/landingpage";
import StorePage from "./views/storepage";

// import HeaderBar from "./layouts/Header";

import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        {/* <HeaderBar /> */}
        <Route exact path="/" component={LandingPage} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.REGISTER} component={Register} />
        <PrivateRoute path={ROUTES.STORE} component={StorePage} />
      </Router>
    );
  }
}

export default App;
