import axios from "axios";
import UserStorage from "../../storage";

export const register = newUser => {
  return axios
    .post("api/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      UserStorage.setToken(res.data.access_token.token);
      UserStorage.setAdminStatus(res.data.User.is_admin);
      return res;
    });
};

export const login = user => {
  return axios
    .post("api/login", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      UserStorage.setToken(res.data.access_token.token);
      UserStorage.setAdminStatus(res.data.User.is_admin);
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const customers = () => {
  return axios
    .get("api/customers")
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};

export const product = () => {
  return axios
    .get("api/product")
    .then(response => {
      return response;
    })
    .catch(err => {
      return err;
    });
};
