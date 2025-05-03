//Página de Cadastro

// Importando os componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import Navigation from '../../components/Navigation'
import './Cadastro.css'

function Cadastro() {
    return (
        <div className='Cadastro'>
            <Navigation buttons={[{ link: '/', texto: 'Voltar' },{ link: '/lista', texto: 'Lista de Cadastros'}]}/>
            <div className='PageContent'>
                <img className='Usagi' src="../../../assets/sailor-moon-cadastro.png"></img>
                <div className='FormContent'>
                    <Header title="Cadastro"/>
                    <Form/> {/* Formulário */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro