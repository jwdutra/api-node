
const Usuario = require('@model/usuario.model');
const jwt = require('@service/jwt.service');
const message = require('@util/messages');


const auth = async (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) {
    res.sendError(message.AuthErrors.REQUIRED_TOKEN, 406);
    return false;
  }

  try {
    const payload = await jwt.verify(token);
    const usuario = await Usuario.findById(payload.user);

    if (!usuario) {
      res.sendError(message.AuthErrors.AUTH_NECESSARY, 401);
    }

    next();

  } catch (error) {
    res.sendError(message.AuthErrors.INVALID_TOKEN, 406);
  }

};

module.exports = auth; 