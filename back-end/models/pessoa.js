//Importando dependências
const Sequelize = require('sequelize')
const database = require('../connection/db')

//Definindo o modelo de dados
const Pessoa = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER, // Tipo do campo
        autoIncrement: true, // Cria o ID automaticamente
        allowNull: false, // Não permite nulo
        primaryKey: true // Define como chave primária
    },	

    nome: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    uf: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//Exportando o modelo
module.exports = Pessoa