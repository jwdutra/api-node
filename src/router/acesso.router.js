const express = require('express');

const AcessoController = require('@controller/acesso.controller');
const UsuarioController = require('@controller/usuario.controller');

const router = express.Router();

router.post('/login', AcessoController.login);
router.route('/novousuario').post(UsuarioController.criarUsuario);


module.exports = router;
