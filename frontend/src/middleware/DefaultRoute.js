import React from "react";
import { Route } from "react-router-dom";

// import Footer from "../layouts/Footer";

const DefaultRoute = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Route {...rest} render={matchProps => <Component {...matchProps} />} />
    </React.Fragment>
  );
};

export default DefaultRoute;
