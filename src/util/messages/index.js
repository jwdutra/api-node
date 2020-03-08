const httpErrors = {
  '401': 'Autenticação é necessária',
  '404': 'Não encontrado',
  '422': 'Validation Error',
  '500': 'Erro interno do servidor'
};

const routerErrors = {
  NOT_FOUND: (path, method) => { return `Não encontrado ${method} ${path} no sistema`; }
};

// Mensagens de erros de autenticação
const authErrors = {
  REQUIRED_TOKEN: 'Token requerido',
  INVALID_TOKEN: 'Token inválido',
  AUTH_NECESSARY: 'Autenticação é necessária',
  ONLY_ADMIN: 'Esta funcionalidade é restrita aos administradores',
  WRONG_USER_OR_PASS: 'Email e ou senha inválidos',
  ERROR_PATTERN_PASSWORD: 'Senha deve conter 6 ou mais caracteres, letras e ou números'
};

// Mensagens gerais de erros de validação das requisições 
const requestValidationErrors = {
  CANT_BE_EMPTY: (field) => { return `${field} cant be empty`; },
  EXISTS: (field, value) => { return `${field} ${value} já existente`; },
  NO_PATTERN: (field) => { return `${field} fora do padrão determinado`; },
};

// Mensagens gerais de erros de validação nod models
const modelValidation = {
  IS_REQUIRED: (field) => { return `${field} é requerido(a)`; },
  IS_REQUIRED_A: (field) => { return `${field} é requerida`; },
  INVALID_MAIL: 'Email inválido',
};

// Mensagens de operações de CRUD
const crudMessages = {

  LIST_NOT_FOUND: (entity) => { return `${entity} não encontrados`; },
  LIST_NOT_FOUND_A: (entity) => { return `${entity} não encontradas`; },
  LIST_ERROR: (entity) => { return `Erro ao listar ${entity}`; },

  CREATE: (entity) => { return `${entity} incluído com sucesso`; },
  CREATE_A: (entity) => { return `${entity} incluída com sucesso`; },
  CREATE_ERROR: (entity) => { return `Erro ao incluir ${entity}`; },

  DELETE: (entity) => { return `${entity} excluído com sucesso`; },
  DELETE_A: (entity) => { return `${entity} excluída com sucesso`; },
  DELETE_ERROR: (entity) => { return `Erro ao excluir ${entity}`; },

  UPDATE: (entity) => { return `${entity} alterado com sucesso`; },
  UPDATE_A: (entity) => { return `${entity} alterada com sucesso`; },
  UPDATE_ERROR: (entity) => { return `Erro ao alterar ${entity}`; },

  SHOW_ERROR: (entity) => { return `Erro ao pesquisar ${entity}`; },

  NOT_FOUND: (entity) => { return `${entity} não encontrado`; },
  NOT_FOUND_A: (entity) => { return `${entity} não encontrada`; }

};

module.exports = {
  HttpErrors: httpErrors,
  RouterErrors: routerErrors,
  AuthErrors: authErrors,
  RequestValidationErrors: requestValidationErrors,
  ModelValidation: modelValidation,
  CrudMessages: crudMessages
};
