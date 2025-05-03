import logo from '../../assets/logo.jpg'
import ButtonOutline from '../ButtonOutline'
import './Navigation.css'

const Navigation = ({ buttons = [] }) => {  // Recebe uma prop chamada 'buttons', um array de objetos contendo os dados de cada botão (link e texto)
    return (
        <div className="Navigation">
            <img className="Logo" src={logo} alt="Logo" />
            {buttons.map((btn, index) => (
                <ButtonOutline
                    key={index}
                    texto={btn.texto}
                    link={btn.link}
                    onClick={btn.onClick}
                />
            ))}
        </div>
    )
}

export default Navigation
