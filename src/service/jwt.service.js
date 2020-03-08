const jwt = require('jsonwebtoken');
const config = require('@util/config');

const jwtService = {

  sign(payload) {
    return jwt.sign(
      payload,
      config.jwt.secret,
    );
  },

  verify(token) {
    return jwt.verify(token, config.jwt.secret);
  },

  async refresh(token) {
    const payload = await jwt.verify(token);
    return jwt.sign({ user: payload.user });
  },

};

module.exports = jwtService;  
