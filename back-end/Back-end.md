# Back-End do Projeto React & Node.js

Este documento descreve a implementação do back-end do projeto para gerenciar um sistema CRUD (Create, Read, Update, Delete) de usuários.

---

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Express**: Framework para criação de APIs REST.
- **Sequelize**: ORM (Object-Relational Mapping) para manipulação do banco de dados.
- **SQLite**: Banco de dados leve e embutido.
- **CORS**: Middleware para permitir requisições entre diferentes origens.

---

## Estrutura do Back-End

### 1. Configuração do Banco de Dados
O arquivo `connection/db.js` configura o Sequelize para utilizar o banco de dados SQLite.
Ele define o local de armazenamento do banco (`db.sqlite`) e o dialeto utilizado.

### 2. Modelo de Dados
O modelo de dados *Pessoa* é definido no arquivo `models/pessoa.js`.
Ele representa a tabela pessoa no banco de dados e contém os seguintes campos:

- *id*: Chave primária, gerada automaticamente.
- *nome*: Nome do usuário (texto, obrigatório).
- *idade*: Idade do usuário (inteiro, obrigatório).
- *uf*: Unidade Federativa (texto, obrigatório).

### 3. Configuração do Servidor
O servidor é configurado no arquivo `api-cadastro.js`.
Ele utiliza o **Express** para criar as rotas e o **Sequelize** para gerenciar o banco de dados.

### 4. Endpoints do CRUD
Também no arquivo `api-cadastro.js`, foram definidas as rotas para cada comando do CRUD realizar suas instruções.

- *CREATE*
- *READ*
- *UPDATE*
- *DELETE*
- E também a **Read By Id**, para fazer a busca de usuário para preencher o formulário de edição.

---

## Como Executar o Back-End

### Inicie o servidor:
Usando o comando `node api-cadastro.js` no terminal.

### E acesse em:
`http://localhost:3001`