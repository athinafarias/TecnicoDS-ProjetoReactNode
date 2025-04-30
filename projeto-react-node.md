# Projeto React & Node.js

Este projeto é uma aplicação completa que utiliza **React** no front-end e **Node.js** no back-end para gerenciar um sistema CRUD (Create, Read, Update, Delete) de usuários. Ele permite que os usuários sejam cadastrados, listados, editados e excluídos, com integração total entre o front-end e o back-end.

---

## Descrição Geral

### Funcionalidades

1. **Cadastro de Usuários**:
   - O usuário pode preencher um formulário com nome, idade e UF (Unidade Federativa).
   - Os dados são enviados para o back-end, que os armazena no banco de dados.

2. **Listagem de Usuários**:
   - Uma tabela exibe todos os usuários cadastrados.
   - Cada linha da tabela contém opções para editar ou excluir o usuário.

3. **Edição de Usuários**:
   - O usuário pode editar os dados de um registro existente.
   - Os dados são carregados automaticamente no formulário de edição.

4. **Exclusão de Usuários**:
   - O usuário pode excluir um registro da tabela.
   - Após a exclusão, a tabela é atualizada automaticamente.

---

## Conexão entre Front-End e Back-End

### Comunicação via API REST

A integração entre o front-end e o back-end é feita por meio de uma API REST criada com **Express** no back-end. O front-end utiliza a biblioteca **Axios** para realizar requisições HTTP.

### Fluxo de Comunicação

1. **Cadastro**:
   - O front-end envia uma requisição `POST` para o endpoint `/cadastro` com os dados do formulário.
   - O back-end valida os dados e os insere no banco de dados.

2. **Listagem**:
   - O front-end faz uma requisição `GET` para o endpoint `/` para buscar todos os usuários.
   - O back-end retorna os dados em formato JSON, que são exibidos em uma tabela no front-end.

3. **Edição**:
   - O front-end faz uma requisição `GET` para o endpoint `/editar/:id` para buscar os dados de um usuário específico.
   - Após editar, o front-end envia uma requisição `POST` para o endpoint `/update` com os dados atualizados.

4. **Exclusão**:
   - O front-end envia uma requisição `POST` para o endpoint `/delete` com o ID do usuário a ser excluído.
   - O back-end remove o registro do banco de dados e retorna uma mensagem de sucesso.

---

## Tecnologias Utilizadas

### Front-End

- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router DOM**: Gerenciamento de rotas no front-end.
- **Axios**: Requisições HTTP para comunicação com o back-end.
- **CSS**: Estilização da aplicação.

### Back-End

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Express**: Framework para criação de APIs REST.
- **Sequelize**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados leve e embutido.
- **CORS**: Middleware para permitir requisições entre diferentes origens.

---

## Como Executar o Projeto

### Back-End

1. Pelo terminal, navegue até o diretório do back-end:
    `cd back-end`

2. E inicie o servidor:
    `node api-cadastro.js`

3. O servidor estará disponível em:
    `http://localhost:3001`

### Front-End

1. Navegue até o diretório do back-end:
    `cd front-end`

2. E inicie a aplicação:
    `nnpm start`

3. Acesse a aplicação em:
    `http://localhost:3000`