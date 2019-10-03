"use strict";

const BaseModel = use("MongooseModel");

/**
 * @class Users
 */
class Users extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UsersHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Users's schema
   */
  static get schema() {
    return {
      email: String
    };
  }
}

module.exports = Users.buildModel("Users");
