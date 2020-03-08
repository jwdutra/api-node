const Usuario = require('@model/usuario.model');
const handlerror = require('@helper/handleErrors');
const message = require('@util/messages');


/**
 *
 *
 * @class UsuarioRepository
 */
class UsuarioRepository {

	// -------------------------------------------------------------------------
	/**
	 *
	 *
	 * @param {*} data
	 * @returns
	 * @memberof UsuarioRepository
	 */
	async create(data) {

		try {

			const usuario = await new Usuario(data);
			await usuario.save(usuario);
			return { message: message.CrudMessages.CREATE('Usuário'), code: 200 };

		} catch (error) {

			let erros = handlerror.extractError(error);

			if (!erros)
				return { message: message.CrudMessages.CREATE_ERROR('Usuário'), code: 500 };

			return { message: erros, code: 406 };

		}

	};

	// -------------------------------------------------------------------------
	/**
	 *
	 *
	 * @returns
	 * @memberof UsuarioRepository
	 */
	async list() {

		try {

			const result = await Usuario.find();

			if (result.length === 0)
				return { message: message.CrudMessages.LIST_NOT_FOUND('Usuários'), code: 404 };
			return { message: result, code: 200 };

		} catch (error) {

			let erros = handlerror.extractError(error);

			if (!erros) {
				return { message: message.CrudMessages.LIST_ERROR('Usuários'), code: 500 };
			}

			// Se encontrou erros 
			return { message: erros, code: 406 };

		}

	};

	// -------------------------------------------------------------------------
	/**
	 *
	 *
	 * @param {*} id
	 * @returns
	 * @memberof UsuarioRepository
	 */
	async show(id) {

		try {

			const result = await Usuario.findOne({ _id: id });

			if (!result)
				return { message: message.CrudMessages.NOT_FOUND('Usuário'), code: 404 };
			return { message: result, code: 200 };

		} catch (error) {

			let erros = handlerror.extractError(error);

			if (!erros) {
				return { message: message.CrudMessages.SHOW_ERROR('Usuário'), code: 500 };
			}

			// Se encontrou erros 
			return { message: erros, code: 406 };

		}

	};

	// -------------------------------------------------------------------------
	/**
	 *
	 *
	 * @param {*} id
	 * @returns
	 * @memberof UsuarioRepository
	 */
	async delete(id) {

		try {

			const result = await Usuario.findByIdAndDelete(id);

			if (!result)
				return { message: message.CrudMessages.NOT_FOUND('Usuário'), code: 404 };
			return { message: message.CrudMessages.DELETE('Usuário'), code: 200 };

		} catch (error) {

			let erros = handlerror.extractError(error);

			if (!erros) {
				return { message: message.CrudMessages.DELETE_ERROR('Usuário'), code: 500 };
			}

			// Se encontrou erros 
			return { message: erros, code: 406 };

		}

	};

	// -------------------------------------------------------------------------
	/**
	 *
	 *
	 * @param {*} data
	 * @returns
	 * @memberof UsuarioRepository
	 */
	async update(data) {

		try {

			const usuario = await new Usuario(data);
			await Usuario.updateOne({ _id: data._id }, { $set: usuario });
			return { message: message.CrudMessages.UPDATE('Usuário'), code: 200 };

		} catch (error) {

			let erros = handlerror.extractError(error);

			if (!erros)
				return { message: message.CrudMessages.UPDATE_ERROR('Usuário'), code: 500 };

			return { message: erros, code: 406 };

		}

	}

};

module.exports = new UsuarioRepository();
