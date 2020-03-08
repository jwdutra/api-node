// Configurações do sistema
module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  jwt: {
    secret: process.env.SECRET || 'v$Z!!53s5N&M',
    secretExpire: process.env.SECRET_EXPIRE || 3600,
  },
  db: {
    connectionString: process.env.MONGO_DB || 'mongodb+srv://<usuario>:<senha>@banco-uni8y.mongodb.net/test?retryWrites=true&w=majority',
  },
  requests: { // Limita quantidade de requisições 
    rateLimit: {
      window: 15 * 60 * 100, // ms - Limitando resuisições
      max: 150, // Máximo de 150 a cada 15 minutos
    },
    slowDown: { // 
      window: 15 * 50 * 1000,
      delayAfter: 100,
      delayMs: 100,
    },
  },
};
