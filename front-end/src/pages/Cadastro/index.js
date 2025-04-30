//Página de Cadastro

// Importando as dependências
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import Form from '../../components/Form'

function Cadastro() {
    return (
        <div>
            <Header title="Cadastro"/>
            <Link to='/'>Voltar</Link> {/* Botão para voltar para a Home */}
            <Form/> {/* Formulário */}
            <Link to='/lista'>Lista de Cadastros</Link> {/* Botão para acessar a lista de cadastros */}
        </div>
    )
}

export default Cadastro