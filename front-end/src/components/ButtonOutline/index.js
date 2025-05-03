import './ButtonOutline.css'
import { Link } from 'react-router-dom'

const ButtonOutline = (props) => {
    return (
        <Link to={props.link} className="ButtonOutline" onClick={props.click}>
            {props.texto}
        </Link>
    )
}

export default ButtonOutline