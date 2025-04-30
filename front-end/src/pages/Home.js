// Página principal do site

// Importando dependências e componentes
import {Link} from 'react-router-dom'
import Header from '../components/Header'

function Home() {
    return (
        <div>
            <Header title="Bem-vindo!"/>
            <Link to="/cadastro">Se Cadastre!</Link> {/* Botão para ir para a página de cadastro */}
        </div>
    )
}

export default Home