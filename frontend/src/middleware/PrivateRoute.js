import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserStorage from "../storage";
import { LOGIN } from "../routes.js";

const isAuth = () => UserStorage.getToken();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth() ? (
        <Route {...rest} component={Component} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN,
            state: { from: props.location, isRedirect: true }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
