console.log('INICIA BOOT', 2);

const app = require('@app/app');
const config = require('@util/config');

module.exports = (err) => {
  if (err) {
    return console.log(err);
  }

  app.listen(config.app.port, (err) => {
    if (err) {
      return console.log('erro');
    }

    console.log(`iniciou em http://localhost:${config.app.port}`);
  });
};

console.log('TERMINA BOOT', 4);
