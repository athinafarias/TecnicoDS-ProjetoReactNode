import Header from '../components/Header'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div>
            <Header title="Bem-vindo!"/>
            <Link to="/cadastro">Se Cadastre!</Link>
        </div>
    )
}

export default Home