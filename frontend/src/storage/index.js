const USER_TOKEN = "USER_TOKEN";
const IS_ADMIN = "IS_ADMIN";

class UserStorage {
  static getToken() {
    return localStorage.getItem(USER_TOKEN);
  }

  static setToken = token => {
    localStorage.setItem(USER_TOKEN, token);
  };

  static removeToken() {
    return localStorage.removeItem(USER_TOKEN);
  }

  static getAdminStatus() {
    return JSON.parse(localStorage.getItem(IS_ADMIN));
  }

  static setAdminStatus = value => {
    return localStorage.setItem(IS_ADMIN, value);
  };
}

export default UserStorage;
