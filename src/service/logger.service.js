const winston = require('winston');

const options = {
  fileError: {
    level: 'error',
    filename: 'logs/error.log',
    format: winston.format.json(),
    defaultMeta: { date: new Date() },
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  fileAll: {
    filename: 'logs/all.log',
    format: winston.format.json(),
    defaultMeta: { date: new Date() },
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.fileError),
    new winston.transports.File(options.fileAll),
    new winston.transports.Console(options.console),
  ],
});

module.exports = logger;
