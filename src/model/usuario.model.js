const mongoose = require('mongoose');

const validator = require('validator');
const crypto = require('crypto');

const message = require('@util/messages');
const baseSchema = require('@model/base.model')


/**
 *
 *
 * @class UsuarioSchema
 * @extends {baseSchema}
 */
class UsuarioSchema extends baseSchema {

  constructor(obj, options) {
    super(obj, options);

    const data = {
      nome: {
        type: String,
        required: [true, message.ModelValidation.IS_REQUIRED('Nome')],
        trim: true,
      },
      email: {
        type: String,
        unique: true,
        required: [true, message.ModelValidation.IS_REQUIRED('Email')],
        lowercase: true,
        trim: true,
        validate: {
          validator: value => { return validator.isEmail(value) },
          message: message.ModelValidation.INVALID_MAIL,
        }
      },
      senha: {
        type: String,
        required: [true, message.ModelValidation.IS_REQUIRED_A('Senha')],
        select: false,
        set: value => crypto.createHash('md5').update(value).digest('hex'),
      },
      token: { type: String, },
    };

    this.add(data);
  }


};

const schema = new UsuarioSchema();

module.exports = mongoose.model('usuario', schema); 