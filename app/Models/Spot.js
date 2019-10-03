"use strict";

const BaseModel = use("MongooseModel");
const mongoose = require("mongoose");

/**
 * @class Users
 */
class Spot extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'SpotHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Spot's schema
   */
  static get schema() {
    return {
      thumbnail: String,
      company: String,
      valor: Number,
      techs: [String],
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
      }
    };
  }
}

module.exports = Spot.buildModel("Spot");
