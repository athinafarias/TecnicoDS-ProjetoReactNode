import './Button.css'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to={props.link} className="Button">
            {props.texto}
        </Link>
    )
}

export default Button