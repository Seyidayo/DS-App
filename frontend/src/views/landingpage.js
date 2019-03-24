import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import UserStorage from "../storage";
import {
  Grid,
  Header,
  Container,
  Button,
} from "semantic-ui-react";
import * as ROUTE from "../routes";

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
      } else {
        this.setState({ isLoggedIn: false });
      }
    } catch (err) {
      throw err;
    }
  }
  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <Redirect to={ROUTE.STORE} push={true} />;
    }
    return (
      <React.Fragment>
        <Container>
          <div className="store-landingpage">
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width="8" className="red" style={{paddingTop: 100}}>
                  <Header className="store-large-text"><span>Shoe Brand</span> <br/> Shoe Name </Header>
                  <Link to={ROUTE.LOGIN}>
                    <Button size="medium">Shop Now</Button>
                  </Link>
                </Grid.Column>
                <Grid.Column width="8" textAlign="right">
                  <div className="store-landing-page-image">{/* <Image */}</div>
                  <Header size="small">Shoe Description , Shoe Abstract</Header>
                  <Header className="store-medium-text">Shoe Price</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default LandingPage;
