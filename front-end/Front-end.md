# Front-End do Projeto React & Node.js

Este documento descreve a implementação do front-end do projeto, que utiliza **React** para criar uma interface de usuário interativa e funcional, integrando-se ao back-end para gerenciar um sistema CRUD (Create, Read, Update, Delete) de usuários.

---

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router DOM**: Biblioteca para gerenciamento de rotas no React.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **CSS**: Utilizado para estilização da aplicação.

---

## Estrutura do Front-End

### 1. Configuração Inicial
O arquivo `src/index.js` é o ponto de entrada da aplicação React.

### 2. Gerenciamento de Rotas
O arquivo `src/router.js` define as rotas da aplicação utilizando o React Router DOM. Ele mapeia as URLs para as páginas.

### 3. Componentes Principais
- **Header**: Exibe o título da página.
- **Formulário de Cadastro**: Responsável por exibir o formulário de cadastro e enviar os dados para o back-end.

### 4. Páginas
- **Home**: Página inicial com links para as páginas de cadastro e lista de usuários.
- **Página de Cadastro**: Utiliza o componente Form para exibir o formulário de cadastro
- **Página de Lista de Usuários**: Exibe uma tabela com os usuários cadastrados e permite excluir ou editar um usuário.
- **Página de Edição**: Permite editar os dados de um usuário específico.

---

## Como Executar o Front-End

### Inicie o servidor:
Usando o comando `npm start` no terminal.

### E acesse em:
`http://localhost:3000`