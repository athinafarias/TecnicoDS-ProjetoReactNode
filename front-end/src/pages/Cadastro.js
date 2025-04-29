import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Form from '../components/Form'

function Cadastro() {
    return (
        <div>
            <Header title="Cadastro"/>
            <Link to='/'>Voltar</Link>
            <Form/>
            <Link to='/lista'>Lista de Cadastros</Link>
        </div>
    )
}

export default Cadastro