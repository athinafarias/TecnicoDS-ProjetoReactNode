// Página principal do site

// Importando dependências e componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import ButtonOutline from '../../components/ButtonOutline'
import './Home.css'

function Home() {
    return (
        <div className='Home'>
            <div className='PageContent'>
                <div className='Image'>
                    <img src="../../../assets/sailor-moon-home.png"></img>
                </div>
                <div className='Content'>
                    <Header title="Bem-vindo!"/>
                    <p>Atividade feita para o Curso Técnico em Desenvolvimento de Sistemas, no Ginásio Pernambucano. Trabalhando conceitos de React e CRUD. <strong>Projeto feito por: Athina Farias e Thayanne Stella</strong></p>
                    <div className='HomeNavigation'>
                        <Button link="/cadastro" texto="Se Cadastre!"/> {/* Botão para ir para a página de cadastro */}
                        <ButtonOutline link="/lista" texto="Lista De Cadastros"/> {/* Botão para ir para a lista de cadastro */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home