// Página para editar os dados de um usuário

// Importando dependências necessárias
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Editar.css'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ButtonOutline from '../../components/ButtonOutline'

function Editar() {
    // Obtém o parâmetro `id` para a URL, para definir qual usuário editar
    const { id } = useParams()

    // Hook para redirecionar o usuário após salvar
    const navigate = useNavigate()

    // Estado para armazenar os valores dos campos do formulário
    const [campos, setCampos] = useState({
        txtNome: '', // Nome do usuário
        txtIdade: '', // Idade do usuário
        selectUF: '' // Unidade Federativa (UF) do usuário
    })

    // Para buscar os dados do usuário ao carregar a página
    useEffect(() => {
        axios.get(`http://localhost:3001/editar/${id}`) // Faz uma requisição GET para buscar os dados do usuário pelo back-end
            .then(response => {
                // Atualiza o estado com os dados retornados
                setCampos({
                    txtNome: response.data.nome,
                    txtIdade: response.data.idade.toString(), // Converte a idade para string para ser usada no input
                    selectUF: response.data.uf
                })
            })
            .catch(() => alert('Erro ao buscar dados!')) // Exibe um alerta em caso de erro
    }, [id]) // [id] => O efeito será executado sempre que o `id` mudar

    // Função para lidar com mudanças nos campos do formulário
    function handleChange(e) {
        const { name, value } = e.target // Obtém o nome e o valor do campo alterado
        setCampos(prev => ({ ...prev, [name]: value })) // Atualiza o estado com o novo valor do campo
    }

    // Função para lidar com o envio do formulário
    function handleSubmit(e) {
        e.preventDefault() // Previne o comportamento padrão de recarregar a página
        axios.post('http://localhost:3001/update', { // Faz uma requisição POST para atualizar os dados do usuário pelo back-end
            id, // Inclui o ID do usuário
            ...campos // Inclui os valores dos campos do formulário
        }).then(() => {
            alert('Usuário atualizado!') // Exibe uma mensagem de sucesso
            navigate('/lista') // Redireciona para a página de lista de usuários
        }).catch(() => alert('Erro ao atualizar!')) // Exibe um alerta em caso de erro
    }

    // Retorno do JSX que renderiza o formulário de edição
    return (
        <div className='Editar'>
            <Navigation buttons={[{ link: '/', texto: 'Home' }, { link: '/cadastro', texto: 'Novo Cadastro' }]}/>

            <div className='PageContent'>
                <form onSubmit={handleSubmit} className='FormEditar'> {/* Define a função de envio do formulário */}
                    <Header title="Editar Usuário" />
                
                    {/* Campo para o nome */}
                    <label>Nome
                        <input
                            type="text"
                            name="txtNome"
                            value={campos.txtNome}
                            onChange={handleChange}
                            placeholder="Nome"
                            className='InputPadrão'
                        />
                    </label>
                    {/* Campo para a idade */}
                    <label>Idade
                        <input
                            type="number"
                            name="txtIdade"
                            value={campos.txtIdade}
                            onChange={handleChange}
                            placeholder="Idade"
                            className='InputPadrão'
                        />
                    </label>
                    {/* Campo para a UF */}
                    <label>UF
                        <input
                            type="text"
                            name="selectUF"
                            value={campos.selectUF}
                            onChange={handleChange}
                            placeholder="UF"
                            className='InputPadrão'
                        />
                    </label>
                    {/* Botão para salvar as alterações */}
                    <button className='Enviar' type="submit">Salvar</button>
                </form>
                <ButtonOutline link='/lista' texto='Voltar para Lista'/>
            </div>
            <Footer />
        </div>
    )
}

export default Editar
