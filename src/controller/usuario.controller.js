const validator = require('validator');
const handlerror = require('@helper/handleErrors');
const message = require('@util/messages');

const usuarioRepository = require('@repository/usuario.repository');

/**
 * Controller CRUD de usuários
 *
 * @class UsuarioController
 */
class UsuarioController {

  // --------------------------------------------------------------------------------------
  /**
   * Cria novo registro de usuário
   *
   * @param {*} req
   * @param {*} res
   * @returns
   * @memberof UsuarioController
   */
  async criarUsuario(req, res) {

    let { senha } = req.body;

    if (!validator.isLength(senha, { min: 6, max: 20 }) || !validator.isAlphanumeric(senha, 'pt-BR')) {
      res.sendError(message.AuthErrors.ERROR_PATTERN_PASSWORD, 406);
      return false;
    }

    const result = await usuarioRepository.create(req.body);
    handlerror.handleResult(res, result);

  };

  // --------------------------------------------------------------------------------------
  /**
   * Lista usuários existentes
   *
   * @param {*} req
   * @param {*} res
   * @memberof UsuarioController
   */
  async listarUsuarios(req, res) {

    const result = await usuarioRepository.list();
    handlerror.handleResult(res, result, true);

  };

  // --------------------------------------------------------------------------------------
  /**
   * Mostra dados de um usuário a partir de um identificador
   *
   * @param {*} req
   * @param {*} res
   * @memberof UsuarioController
   */
  async mostrarUsuario(req, res) {

    const { id } = req.params;

    const result = await usuarioRepository.show(id);
    handlerror.handleResult(res, result, true);

  };

  // --------------------------------------------------------------------------------------
  /**
   * Exclui um usuário a partir de seu identificador
   *
   * @param {*} req
   * @param {*} res
   * @memberof UsuarioController
   */
  async excluirUsuario(req, res) {

    const { id } = req.params;

    const result = await usuarioRepository.delete(id);
    handlerror.handleResult(res, result);

  };

  // --------------------------------------------------------------------------------------
  /**
   * Altera dados de um usuário 
   *
   * @param {*} req
   * @param {*} res
   * @memberof UsuarioController
   */
  async alterarUsuario(req, res) {

    console.log(req.body);

    const result = await usuarioRepository.update(req.body);
    handlerror.handleResult(res, result);

  };

};

module.exports = new UsuarioController();
