const message = require('@util/messages');

/**
 * Helper de funcionalidades para gerenciamento de erros e mensagens
 *
 * @class HandleErrors
 */
class HandleErrors {

  // -------------------------------------------------------------------------
  /**
   * Captura erros de objeto de retorno do Mangoose
   *
   * @param {*} error
   * @returns
   * @memberof HandleErrors
   */
  extractError(error) {

    //----------------------------------------------------------------------------
    // Se é um erro de violação de unicidade
    if (error.name === 'MongoError' && (error.code === 11000 || error.code === 11001)) {
      let erro = error.keyValue;
      let chave = Object.keys(erro);

      let mensagem = message.RequestValidationErrors.EXISTS(chave, erro[chave]);

      return mensagem;

    }

    //----------------------------------------------------------------------------
    // Se o valor enviado está fora do padrão determinado mo model
    if (error.name === 'CastError') {
      let mensagem = message.RequestValidationErrors.NO_PATTERN(error.path);

      return mensagem;
    }

    //----------------------------------------------------------------------------
    // Se é um erro de validação do que foi determinado no model
    if (error.name === 'ValidationError') {

      const erros = error.errors;

      const quantidadeErros = Object.keys(erros).length;

      if (quantidadeErros === 0) return null;

      let listaErros = {};

      for (let er in erros) {
        Object.assign(listaErros, { [er]: erros[er].message });
      };

      if (Object.keys(listaErros).length === 1)
        return listaErros[Object.keys(listaErros)[0]];

      return listaErros;

    };

    return null;

  };

  /** Envia resultados ou mensagens de erro ou sucesso.
   *
   *
   * @param {*} res
   * @param {*} result
   * @param {boolean} [noMessage=false] true, envia resultado puro sem argumento "message"
   * @memberof HandleErrors
   */
  handleResult(res, result, noMessage = false) {

    if (result.code === 200)
      if (noMessage)
        res.status(200).json(result.message);
      else
        res.status(200).json({ message: result.message });
    else
      res.sendError(result.message, result.code);

  }

};

module.exports = new HandleErrors();