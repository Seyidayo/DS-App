import React from "react";
import { Redirect, Link } from "react-router-dom";
import { register } from "../../services/backend";
import { Form, Grid, Button, Segment, Header } from "semantic-ui-react";
import UserStorage from "../../storage";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      isLoggedIn: false
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
    const { first_name, last_name, email, phone_number, password } = this.state;
    const newUser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      phone_number: phone_number
    };

    register(newUser).then(res => {
      this.props.history.push("/store");
    });
  };

  render() {
    const {
      first_name,
      last_name,
      phone_number,
      email,
      password,
      isLoggedIn
    } = this.state;
    if (isLoggedIn) return <Redirect to="/store" />;
    return (
      <div className="store-auth-page">
        <Grid
          container
          verticalAlign="middle"
          style={{ height: "100%" }}
          textAlign="center"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment>
              
              <Form onSubmit={this.handleSubmit} noValidate>
                <Form.Input
                  placeholder="First Name"
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={this.handleChange}
                />

                <Form.Input
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  value={last_name}
                  onChange={this.handleChange}
                />

                <Form.Input
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />

                <Form.Input
                  placeholder="Phone Number"
                  type="tel"
                  name="phone_number"
                  value={phone_number}
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
                  fluid
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Register
                </Button>
              </Form>
            </Segment>
            <Header size="small">
              Already have an account, <br /> go ahead to{" "}
              <Link to="/login">login</Link>
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
