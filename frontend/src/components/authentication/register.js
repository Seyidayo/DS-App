import React from "react";
import { register } from "../../services/backend";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { first_name, last_name, email, password } = this.state;
    const newUser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    };

    register(newUser).then(res => {
      this.props.history.push("/store");
    });
  };

  render() {
    const { first_name, last_name, email, password } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} noValidate>
          <h3>First Name</h3>
          <input
            placeholder="First Name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />

          <h3>Last Name</h3>
          <input
            placeholder="Last Name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />

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

          <button type="submit" onClick={this.handleSubmit}>
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
