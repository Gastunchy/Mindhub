import { Link } from "react-router-dom";
import "./style.css"



function CardVacia({eventos}) {

    return (
        <div className="cardM" key={eventos._id}>
        <div className="header"></div>
        <div className="card-body">
            <p className="card-text"> No se Encuentra ningún evento </p>
        </div>
        <div className="footerCard"></div>
    </div>
    );
}
export default CardVacia;
