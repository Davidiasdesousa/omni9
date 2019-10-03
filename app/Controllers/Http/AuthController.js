"use strict";
const Model = use("App/Models/Users");

class AuthController {
  async register({ request, response }) {
    let data = request.only("email");
    const user = await Model.findOne({ email: data.email });
    if (user) {
      return {
        success: false,
        data: "Usuário já existe no banco de dados"
      };
    }
    try {
      data = await Model.create(data);
      return {
        success: true,
        data: "Usuário cadastrador com sucesso!"
      };
    } catch (e) {
      return {
        success: false,
        data: "Erro ao cadastrar usuário"
      };
    }
  }
}
module.exports = AuthController;
