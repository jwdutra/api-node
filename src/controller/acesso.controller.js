const Usuario = require('@model/usuario.model');
const jwt = require('@service/jwt.service');
const message = require('@util/messages');

/**
 * Controller para gestão de acessos de usuário
 *
 * @class AcessoController
 */
class AcessoController {


  /**
   *
   *
   * @param {*} req
   * @param {*} res
   * @memberof AcessoController
   */
  async login(req, res) {
    const { email, senha } = req.body;

    const user = await Usuario.find({ email, senha });

    if (user.length === 0) {
      res.sendError(message.AuthErrors.WRONG_USER_OR_PASS, 401);
    } else {
      const token = jwt.sign({ user: user[0].id });
      res.send({ user, token });
    }

  };

};

module.exports = new AcessoController();  
