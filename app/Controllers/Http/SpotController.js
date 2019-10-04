"use strict";
const User = use("App/Models/Users");
const Model = use("App/Models/Spot");
const Helpers = use("Helpers");

class SpotController {
  async index({ request }) {
    const { tech } = request.get();

    const spots = await Model.find({ techs: tech });
    return {
      success: true,
      data: spots
    };
  }

  async store({ request, response }) {
    const { user_id } = request.headers();
    let data = {};
    console.log(user_id);

    data.user = await User.findById(user_id);
    if (!data.user) {
      return {
        success: false,
        data: "User does not exists"
      };
    }
    const file = request.file("thumbnail", {
      types: ["image"],
      size: "2mb"
    });
    const initial = Date.now();
    await file.move(Helpers.tmpPath("uploads"), {
      name: `${initial}-${file.clientName}`
    });
    if (!file.moved()) {
      return file.errors();
    }

    data = request.only(["company", "valor", "techs"]);
    const { user } = request.headers();
    data.user = user;
    data.techs = data.techs.split(",").map(tech => tech.trim());

    data.thumbnail = `${initial}-${file.clientName}`;
    data = await Model.create(data);
    return {
      success: true,
      data: "User created successfully!"
    };
  }
}

module.exports = SpotController;
