// Componente de Header padrão para o projeto
import './Header.css'

const Header = (props) => {
    return (
        <header className="Header">
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header