"use strict";
const User = use("App/Models/User");

class AuthController {
  async register({ request, auth, reponse }) {
    const first_name = request.input("first_name");
    const last_name = request.input("last_name");
    const email = request.input("email");
    const password = request.input("password");

    let user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = password;

    user = await user.save();
    let accessToken = await auth.generate(user);
    return response.json({ User: user, access_token: accessToken });
  }

  async login({ request, auth, response }) {
    const email = request.input("email");
    const password = request.input("password");
    try {
      if (await auth.attempt(email, password)) {
        let user = await User.findBy("email", email);
        let accessToken = await auth.generate(user);
        return response.json({ User: user, access_token: accessToken });
      }
    } catch (error) {
      console.log(error);
      return response.json({ message: "You need to register!" });
    }
  }
}

module.exports = AuthController;
