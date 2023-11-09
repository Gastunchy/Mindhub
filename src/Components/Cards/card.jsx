import { Link } from "react-router-dom";
import "./style.css"



function Card({eventos}) {

    return (
        <> <div className="cardM" key={eventos.id} role="CardContenedor">
            <div className="header"></div>
            <div className="contenImg">
                <img src={eventos.image} className="card-img-top" alt="..." id="card_image" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{eventos.name}</h5>
                <p className="card-text">{eventos.description}</p>
                <div className="contenedorBonito">
                    <p className="card-price">${eventos.price}</p>
                    <Link to={`/Details/${eventos._id}`} className="btn btn-danger"  >
                        Ver Más
                    </Link>
                </div>
            </div>
            <div className="footerCard"></div>
        </div>
        </>
    );
}
export default Card;
