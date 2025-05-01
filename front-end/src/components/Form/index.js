// Componente para o formulário de cadastro

// Importando dependências
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Form.css' 

// Função principal do componente
function Form() {

    // Estado para armazenar a lista de estados (UFs) retornados pela API do IBGE
    const [estados, setEstados] = useState([])

    // Para buscar os estados (UFs) do IBGE ao carregar o componente
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setEstados(response.data)
            })
    }, []) // O array vazio [] garante que o efeito será executado apenas uma vez

    // Estado para armazenar os valores dos campos do formulário
    const [campos, setCampos] = useState({
        txtNome: '',
        txtIdade: '',
        selectUF: ''
    })

    // Função para lidar com mudanças nos campos do formulário
    function handleInputChange(event) {
        campos[event.target.name] = event.target.value // Atualiza o valor do campo
        setCampos(campos) // Atualiza o estado com os novos valores
    }

    // Função para lidar com o envio do formulário
    function handleFormSubmit(event) {
        event.preventDefault() // Previne o comportamento padrão de recarregar a página
        axios.post('http://localhost:3001/cadastro', campos) // Faz uma requisição POST para o endpoint de cadastro no back-end
            .then(response => {
                alert(response.data.message) // Exibe uma mensagem de sucesso vinda do back-end
            })
    }

    // Retorno do JSX que renderiza o formulário
    return (
        <div className='Form'>
            <form onSubmit={handleFormSubmit}> {/* Define a função de envio do formulário */}
                <fieldset>
                    <legend>
                        <p>✶</p>
                        <p>Insira seus Dados</p>
                    </legend>

                    {/* Campo para o nome */}   
                    <div>
                        <label>Nome
                            <input className='InputPadrão' type="text" name="txtNome" id="txtNome" onChange={handleInputChange}/>
                        </label>
                    </div>

                    {/* Campo para a idade */}
                    <div>
                        <label>Idade
                            <input className='InputPadrão' type="number" name="txtIdade" id="txtIdade" onChange={handleInputChange}/>
                        </label>
                    </div>

                    {/* Campo para selecionar o estado (UF) */}
                    <div>
                        <label>UF
                            <select className='InputPadrão' name="selectUF" id="selectUF" onChange={handleInputChange}>
                                <option value="0">Selecione uma opção</option> {/* Opção padrão */}
                                {estados.map( // Mapeia os estados retornados pela API do IBGE
                                    estado =>
                                        (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))
                                }
                            </select>
                        </label>
                    </div>

                    <p>✶</p>

                    {/* Botão para enviar o formulário */}
                    <input className='Enviar' type="submit" value="Salvar" />

                </fieldset>
            </form>
            
        </div>
    )
}

// Exporta o componente para ser usado em outros arquivos
export default Form