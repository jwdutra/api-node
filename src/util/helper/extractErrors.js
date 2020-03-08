// Extrai lista de erros de validação a serem apresentados
module.exports = (error) => {

  const erros = error.errors;
  const quantidadeErros = Object.keys(erros).length;

  if (quantidadeErros === 0) return null;

  let listaErros = {};

  for (let er in erros) {
    Object.assign(listaErros, { [er]: erros[er].message });
  };

  return listaErros;

};