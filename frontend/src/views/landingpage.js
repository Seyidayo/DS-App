import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UserStorage from "../storage";
import "../App.css";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  async checkLoginStatus() {
    try {
      const status = await UserStorage.getToken();
      if (status) {
        this.setState({ isLoggedIn: true });
      }else {
        this.setState({ isLoggedIn: false})
      }
    } catch (err) {
      throw err;
    }
  }
  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to="/store" push={true} />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default LandingPage;
