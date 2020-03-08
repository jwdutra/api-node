const express = require('express');
const cors = require('cors');
const compression = require('compression');

const sendError = require('@middleware/sendError.middleware');
const rateLimit = require('@middleware/rateLimit.middleware');

const app = express();

app.use(cors());
app.use(compression());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Intercepta erros
app.use(sendError);

// Intercepta abusos de acesso e aplica limites 
app.use(...rateLimit);

require('@routes')(app);

module.exports = app;

console.log('CONFGURA O APP', 3);  
