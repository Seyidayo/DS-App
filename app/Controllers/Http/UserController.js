"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ request, response, view }) {
    let users = await User.all();
    return response.json(users);
  }

  async destroy({params, response}) {
    await User.findBy("email",params.email).delete();
      return response.json({message: 'User Deleted', success: true})
  }
}

module.exports = UserController;