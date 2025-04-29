import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Form() {
    const [estados, setEstados] = useState([])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setEstados(response.data)
            })
    }, [])

    const [campos, setCampos] = useState({
        txtNome: '',
        txtIdade: '',
        selectUF: ''
    })

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value
        setCampos(campos)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/cadastro', campos).then(response => {
            alert(response.data.message)
        })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" onChange={handleInputChange}/>
                        </label>
                    </div>

                    <div>
                        <label>Idade:
                            <input type="number" name="txtIdade" id="txtIdade" onChange={handleInputChange}/>
                        </label>
                    </div>

                    <div>
                        <label>UF:
                            <select name="selectUF" id="selectUF" onChange={handleInputChange}>
                                <option value="0">Selecione uma opção</option>
                                {estados.map(
                                    estado =>
                                        (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))
                                }
                            </select>
                        </label>
                    </div>

                    <input type="submit" value="Salvar" />

                </fieldset>
            </form>

        </div>
    )
}

export default Form