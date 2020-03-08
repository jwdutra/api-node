
const authMiddleware = require('@middleware/authorize.middleware');
const message = require('@util/messages');

const acessoRouter = require('@router/acesso.router');
const usuarioRouter = require('@router/usuario.router');

const router = (app) => {

  app.use('/', acessoRouter);
  app.use('/usuario', authMiddleware, usuarioRouter);

  app.get('*', function (req, res) {
    res.sendError(message.RouterErrors.NOT_FOUND(req.url, req.method), 404);
  })


}

module.exports = router;  
