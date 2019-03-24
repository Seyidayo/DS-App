import React from "react";
import Login from "../components/authentication/login";
import Register from "../components/authentication/register";

class AuthenticationPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Login />
        <Register />
      </React.Fragment>
    );
  }
}

export default AuthenticationPage;