//Página de Cadastro

// Importando os componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import ButtonOutline from '../../components/ButtonOutline'
import './Cadastro.css'

function Cadastro() {
    return (
        <div className='Cadastro'>
            <div className='Navigation'>
                <img className='Logo' src="../../../assets/logo.jpg"></img>
                <ButtonOutline link="/" texto="Voltar"/> {/* Botão para voltar para a Home */}
                <ButtonOutline link="/lista" texto="Lista de Cadastros"/> {/* Botão para acessar a lista de cadastros */}
            </div>
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