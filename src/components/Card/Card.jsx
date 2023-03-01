import "./Card.scss"
import { Link } from "react-router-dom";

const Card = ({img, title, price, to}) => {
    return (
        <Link className="card-wrapper" to={to}>
            <img className="card-img" src={img}></img>
            <div className="card-info-wrapper">
                <p className="card-title">{title}</p>
                <p className="card-price">${price}</p>
            </div>
        </Link>
    )
} 

export default Card