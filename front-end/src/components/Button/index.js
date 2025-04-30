import './Button.css'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to={props.link} className="Button">
            <button>
                {props.texto}
            </button>
        </Link>
    )
}

export default Button