
import Layout from "../Layaout/layaout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { useSelector } from "react-redux";

function Details( {title}) {
    const eventos = useSelector(store => store.eventos)

    let {id} = useParams() 
    // Obtiene el valor del parámetro 'id' de la URL utilizando la función useParams, se pone { }
    // porque useParams devuelve un objeto (que es la url), y con las {} solo traemos la propiedad.
    let [evento, SetEvento] = useState([]); 

    useEffect(() => {
       
        SetEvento(eventos.find((evento) => evento._id == id))
        //find, busca si un evento id coincide con el id, del useParams y lo setea.

    }
    ,[id, eventos]);
        // cada vez que cambie, el ID y los Eventos, se va a renderizar.

    return (
        <>
            <Layout title={title}>
                <div className="contenedorCarta">
                        <div className="cardM" key={evento._id}>
                            <div className="header"></div>
                            <div className="contenImg">
                                <img src={evento.image} className="card-img-top" alt="..." id="card_image" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{evento.name}</h5>
                                <p className="card-text">{evento.description}</p>
                                <p class="card-text">El evento tiene una capacidad de: {evento.capacity} personas</p>
                                <p class="card-text">El evento se realiza en: {evento.place}</p>
                                <p class="card-text">Abre el dia: {evento.date}</p>
                                <div className="contenedorBonito">
                                    <p class="card-price">La entrada es general de: ${evento.price}</p>
                                    <Link to="/" className="btn btn-danger" >
                                        Volver
                                    </Link>
                                </div>
                            </div>
                            <div className="footerCard"></div>
                        </div>
                </div>
            </Layout>
        </>
    );
}

export default Details;