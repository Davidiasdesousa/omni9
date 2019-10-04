"use strict";
const User = use("App/Models/Users");
const Model = use("App/Models/Spot");
const Booking = use("App/Models/Booking");

class SpotController {
  async store({ request }) {
    const { user_id } = request.headers();
    const { spot_id } = request.params;
    const { date } = request.body;
    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });
    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();
    return {
      success: true,
      data: booking
    };
  }
}

module.exports = SpotController;
