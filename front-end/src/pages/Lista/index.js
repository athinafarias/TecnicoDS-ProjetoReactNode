// Página para listar os usuários cadastrados

// Importando dependências necessárias
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Lista.css'

// Importando componentes 
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ButtonOutline from '../../components/ButtonOutline'
import Button from '../../components/Button'
import Navigation from '../../components/Navigation'

function Lista() {
    // Estado para armazenar a lista de usuários
    const [usuarios, setUsuarios] = useState([])

    // Carregar os usuários ao montar o componente
    useEffect(() => {
        carregarUsuarios() // Chama a função para buscar os usuários
    }, []) // O array vazio [] garante que o efeito será executado apenas uma vez

    // Função para buscar os usuários do back-end
    const carregarUsuarios = () => {
        axios.get('http://localhost:3001/') // Faz uma requisição GET para o endpoint do back-end
            .then(response => {
                setUsuarios(response.data) // Atualiza o estado com os dados retornados
            })
            .catch(() => {
                alert("Erro ao buscar usuários!") // Exibe um alerta em caso de erro
            })
    }

    // Função para deletar um usuário
    const deletarUsuario = (id) => {
        if (window.confirm("Deseja realmente deletar este usuário?")) { // Confirmação antes de deletar
            axios.post('http://localhost:3001/delete', { id }) // Faz uma requisição POST para deletar o usuário no back-end
                .then(response => {
                    alert(response.data.message) // Exibe a mensagem de sucesso retornada pelo back-end
                    carregarUsuarios() // Atualiza a lista de usuários após a exclusão
                })
                .catch(() => {
                    alert("Erro ao deletar!") // Exibe um alerta em caso de erro
                })
        }
    }

    // Retorno do JSX que renderiza a lista de usuários
    return (
        <div className='Lista'>
            <Navigation buttons={[{ link: '/', texto: 'Home' }, { link: '/cadastro', texto: 'Novo Cadastro' }]}/>

            <div className='PageContent'>
                <Header title="Lista de Usuários" />
                <img className='Sailors' src="../../../assets/sailors-lista.png"></img>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>UF</th>
                            <th>Ações</th> {/* Coluna para as ações (editar/excluir) */}
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((user) => ( // Mapeia a lista de usuários para renderizar as linhas da tabela
                            <tr key={user.id}>
                                <td className='ID'>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.idade}</td>
                                <td>{user.uf}</td>
                                <td className='Acoes'>
                                    <ButtonOutline link='' click={() => deletarUsuario(user.id)} texto='Excluir'/>
                                    <Button link={`/editar/${user.id}`} texto='Editar'/> {/* Link para a página de edição do usuário */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Lista