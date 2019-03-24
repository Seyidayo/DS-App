import React from "react";
import { login } from "../../services/backend";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      next: "/store",
      isLoading: false,
      error: ""
    };
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
      const status = await login({ email, password });
      this.props.history.push(next);
    } catch (err) {
      this.setState({ isLoading: false, error: err });
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} noValidate>
          <h3>Email Address</h3>
          <input
            placeholder="Email Address"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <h3>Password</h3>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          {/* <p>{error}</p> */}

          <button type="submit" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
