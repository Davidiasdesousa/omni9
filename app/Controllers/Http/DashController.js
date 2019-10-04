"use strict";
const User = use("App/Models/Users");
const Model = use("App/Models/Spot");
const Helpers = use("Helpers");

class SpotController {
  async show({ request }) {
    const { user_id } = request.headers();

    const spots = await Model.find({ user: user_id });
    return {
      success: true,
      data: spots
    };
  }
}

module.exports = SpotController;
