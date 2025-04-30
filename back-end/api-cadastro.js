// Importação das dependências do banco de dados
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Conecta com o banco que criamos e com o modelo de dados
const database = require('./connection/db');
const Pessoa = require('./models/pessoa');

// Sincroniza o banco de dados antes de iniciar o servidor
(async () => {
    try {
        await database.sync(); // Cria as tabelas se ainda não existirem
        console.log("Banco de dados sincronizado")

        app.listen(3001, () => console.log("Servidor rodando na porta 3001"))
    } catch (err) {
        console.error("Erro ao conectar ou sincronizar banco:", err)
    }
})()

// Endpoints do CRUD

// CREATE
app.post('/cadastro', async (req, res) => { // Rota para cadastrar um novo usuário
    try {
        // Recebe os dados do formulário
        const { txtNome, txtIdade, selectUF } = req.body

        // Validação dos campos
        if (!txtNome || isNaN(txtIdade) || !selectUF || txtIdade.length !== 2) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios e válidos!' })
        }

        // Cria um novo registro na tabela
        const userCreate = await Pessoa.create({
            nome: txtNome,
            idade: parseInt(txtIdade),
            uf: selectUF
        })

        // Confirma com mensagem de sucesso
        res.json({ message: 'Usuário cadastrado com sucesso!', user: userCreate })

    } catch (err) { // Caso ocorra algum erro
        console.error(err)
        res.status(500).json({ message: 'Erro ao cadastrar usuário!' })
    }
})

// READ
app.get('/', async (req, res) => { // Rota para buscar todos os usuários
    try {
        // Busca todos os registros da tabela
        const users = await Pessoa.findAll()

        // Retorna os dados em formato JSON
        res.json(users)

    } catch (err) { // Caso ocorra algum erro
        console.error('Erro:', err)
        res.status(500).json({ message: 'Erro ao buscar usuários!' })
    }
})

// UPDATE
app.post('/update', async (req, res) => { // Rota para atualizar um usuário
    try {
        // Recebe os dados do formulário
        const { id, txtNome, txtIdade, selectUF } = req.body

        // Busca a pessoa pelo ID
        const user = await Pessoa.findByPk(id)
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado!' })
        }

        // Atualiza os dados da pessoa
        await user.update({
            nome: txtNome,
            idade: parseInt(txtIdade),
            uf: selectUF
        })

        // Confirma com mensagem de sucesso
        res.json({ message: 'Usuário atualizado com sucesso!' })

    } catch (err) { // Caso ocorra algum erro
        console.error(err)
        res.status(500).json({ message: 'Erro ao atualizar usuário!' })
    }
})

// DELETE
app.post('/delete', async (req, res) => { // Rota para deletar um usuário
    try {
        // Recebe o ID do usuário a ser deletado
        const { id } = req.body

        // Deleta o registro com base no ID
        const deleted = await Pessoa.destroy({ where: { id } })
        if (!deleted) {
            return res.status(404).json({ message: 'Usuário não encontrado!' })
        }

        // Confirma com mensagem de sucesso
        res.json({ message: 'Usuário deletado com sucesso!' })

    } catch (err) { // Caso ocorra algum erro
        console.error(err)
        res.status(500).json({ message: 'Erro ao deletar usuário!' })
    }
})

// Rota para BUSCAR uma pessoa por ID (para preencher o formulário de EDIÇÃO)
app.get('/editar/:id', async (req, res) => { 
    try {
        // Recebe o ID da pessoa a ser editada
        const pessoa = await Pessoa.findByPk(req.params.id)

        // Verifica se a pessoa existe
        if (!pessoa) {
            return res.status(404).json({ message: 'Usuário não encontrado!' })
        }

        // Retorna os dados da pessoa encontrada
        res.json(pessoa) 

    } catch (err) { // Caso ocorra algum erro
        res.status(500).json({ message: 'Erro ao buscar usuário!' })
    }
})