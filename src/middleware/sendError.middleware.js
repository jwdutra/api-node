const logger = require('@service/logger.service');


module.exports = (req, res, next) => {

  res.sendError = function (message, status = 500) {

    if (status >= 500)
      logger.error({ message, status, });
    else
      logger.warn({ message, status, });

    return this.status(status).send({ message });
  };
  next();
};
