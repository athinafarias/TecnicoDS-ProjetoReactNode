import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

function Lista() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        carregarUsuarios()
    }, [])

    const carregarUsuarios = () => {
        axios.get('http://localhost:3001/')
            .then(response => {
                setUsuarios(response.data)
            })
            .catch(() => {
                alert("Erro ao buscar usuários!")
            })
    }

    const deletarUsuario = (id) => {
        if (window.confirm("Deseja realmente deletar este usuário?")) {
            axios.post('http://localhost:3001/delete', { id })
                .then(response => {
                    alert(response.data.message)
                    carregarUsuarios() // Atualiza a lista
                })
                .catch(() => {
                    alert("Erro ao deletar!")
                })
        }
    }

    return (
        <div>
            <Header title="Lista de Usuários" />
            <Link to="/form">Cadastrar novo usuário</Link>

            <table>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>UF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                <tbody>
                    {usuarios.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.idade}</td>
                            <td>{user.uf}</td>
                            <td>
                                <button onClick={() => deletarUsuario(user.id)}>Excluir</button>
                                <Link to={`/editar/${user.id}`}>Editar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Lista