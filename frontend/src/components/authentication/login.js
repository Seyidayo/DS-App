import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, Segment, Grid, Header } from "semantic-ui-react";

import { login } from "../../services/backend";
import UserStorage from "../../storage";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      next: "/store",
      isLoading: false,
      isLoggedIn: false,
      error: ""
    };
  }
  componentDidMount() {
    const token = UserStorage.getToken();
    if (token) {
      this.setState({ isLoggedIn: true });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    this.login();
  };

  async login() {
    try {
      const { email, password, next } = this.state;
      await login({ email, password });
      this.props.history.push(next);
    } catch (err) {
      this.setState({ isLoading: false, error: err });
    }
  }

  render() {
    const { email, password, isLoggedIn } = this.state;
    if (isLoggedIn) return <Redirect to="/store" />;
    return (
      <div className="login-form">
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Grid
          container
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            {/* <Header size="large">Login To Your Account</Header> */}
            <Segment>
              <Form size="large" onSubmit={this.handleSubmit} noValidate>
                <Form.Input
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />

                <Button
                  size="large"
                  type="submit"
                  onClick={this.handleSubmit}
                  fluid
                >
                  Login
                </Button>
                {/* <p>{error}</p> */}
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
