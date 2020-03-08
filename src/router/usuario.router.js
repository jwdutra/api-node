const express = require('express');

const UsuarioController = require('@controller/usuario.controller');

const router = express.Router();

router.route('/').get(UsuarioController.listarUsuarios);
router.route('/:id').get(UsuarioController.mostrarUsuario);
router.route('/').put(UsuarioController.alterarUsuario);
router.route('/:id').delete(UsuarioController.excluirUsuario);

module.exports = router;
