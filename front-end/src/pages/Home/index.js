// Página principal do site

// Importando dependências e componentes
import Button from '../../components/Button'
import Header from '../../components/Header'
import './Home.css'

function Home() {
    return (
        <div className='Home'>
            <div className='Image'>
                <img src="../../../assets/sailor-moon-home.png"></img>
            </div>
            <div className='Content'>
                <Header title="Bem-vindo!"/>
                <p>Atividade feita para o Curso Técnico em Desenvolvimento de Sistemas, no Ginásio Pernambucano. Trabalhando conceitos de React e CRUD. <strong>Projeto feito por: Athina Farias e Thayanne Stella</strong></p>
                <Button link="/cadastro" texto="Se Cadastre!"/> {/* Botão para ir para a página de cadastro */}
            </div>
        </div>
    )
}

export default Home