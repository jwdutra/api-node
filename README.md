# API-Node

Base estrutural funcional de API REST em Node.js e MongoDb em ES6, com autenticação, JWT e CRUD e com boas práticas de desenvolvimento.

Este projeto foi criado para servir de base para novos projetos profissionais de APIs Rest em Node.js e demonstrar como poderia ser uma estrutura eficiente e escalável em projetos Node.

A estrutura tem como base o padrão MVC, porém se a implementação de Views por ser basicamente Rest, mas não impede que se evolua para um projeto com views.

## Características do projeto

**Ambiente de desenvolvimento**
- Configurações de Lint
- Configurações de Prettier
- Nodemon

**Estrutura** 

![enter image description here](https://maisrenda.com.br/estrutura.png)
      
**Funcionalidades**
- Login
- CRUD completo de usuários
- Segurança baseada em token JWT

**Padrões e boas práticas**
- Estrutura Model / ~~View~~ / Controller
	- Organização do código 
- Repositories
	- Isola operações de banco permitindo facilidade na utilização de outros sistemas de banco de dados.
- Mensagens centralizadas
	- Permite facilidade na manutenção de mensagens
- Logs de erros
	- Facilita manutenção e identificação de erros ocorridos
- Ambiente de desenvolvimento e execução configuráveis
	- Utilização de arquivo de configuração .env
- Configuração de alias para path de arquivos
	- Permite que alterações de estrutura sejam feitas com poucas alterações no código
-  Rotas se paradas por contexto
	- Permite manutenção e identificação de rotas mais rapidamente separando em arquivos menores.
- Proteção contra acessos massivos e abusivos 
	- Apesar de estar presente no projeto, existem outros recursos de servidor que podem atender, porem foi incluído como efeito ilustrativo.

