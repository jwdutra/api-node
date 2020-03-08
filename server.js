require('dotenv').config();
require('module-alias/register');

console.clear();
console.log('INICIA SERVER', 1);

const mongoose = require('mongoose');

const config = require('@util/config');
const init = require('@service/init.service');

// Acesso ao request body
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

if (config.db.connectionString) {
  mongoose.connect(config.db.connectionString, init);
} else {
  console.log('Erro na conexão do banco de dados');
}

console.log('DISPONIBILIZA SERVER', 5);
