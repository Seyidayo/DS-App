import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes";
import UserStorage from "../../storage";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    };

    this.logOut = this.logOut.bind(this)
  }

  async logOut() {
    await UserStorage.removeToken();
    this.context.history.push("/");
  }

  isAuth = () => {
    return UserStorage.getToken() !== null;
  };

  isAdmin = () => {
    return UserStorage.getAdminStatus();
  };

  render() {
    return (
      <React.Fragment>
        {this.isAuth() ? (
          <div>
            <button onClick={this.logOut}>Logout</button>
            {this.isAdmin() ? (
              <Link to={ROUTES.ADMIN}>
                <button>Admin</button>
              </Link>
            ) : (
              <Link to={ROUTES.CART}>
                <button>Cart</button>
              </Link>
            )}
          </div>
        ) : (
          <div>
            <Link to={ROUTES.LOGIN}>
              <button>Login</button>
            </Link>
            <Link to={ROUTES.REGISTER}>
              <button>Register</button>
            </Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default HeaderBar;
