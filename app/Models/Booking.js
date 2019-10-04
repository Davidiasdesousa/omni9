"use strict";

const BaseModel = use("MongooseModel");
const mongoose = require("mongoose");

/**
 * @class Users
 */
class Booking extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'BookingHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Booking's schema
   */
  static get schema() {
    return {
      date: String,
      approved: Boolean,
      valor: Number,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
      },
      spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spot"
      }
    };
  }
}

module.exports = Booking.buildModel("Booking");
