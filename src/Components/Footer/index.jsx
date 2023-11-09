import "./style.css"
import instg from "../../assets/img/Instagram_logo_2016.svg"
import facebook from "../../assets/img/facebook.png"
import whatsapp from "../../assets/img/whatsapp.png"
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="footer">
            <div className="card" role="cardFooter">
                <div className="card-header" >
                    <div className="footerLinks">
                        <button id="boton" role="btnHomeFooter" type="button" className="btn btn-outline-info">
                            <Link to="/"> Home</Link>
                        </button>
                        <button id="boton" type="button" className="btn btn-outline-info">
                            <Link to="/UpComing">UpComing Events</Link>
                        </button>
                        <button id="boton" type="button" className="btn btn-outline-info">
                            <Link to="/Past">Past Events</Link>
                        </button>
                        <button id="boton" type="button" className="btn btn-outline-info">
                            <Link to="/Contact">Contact</Link>
                        </button>
                        <button id="boton" type="button" className="btn btn-outline-info">
                            <Link to="/Stats">Stats</Link>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="footerRedes">
                        <Link role="btnIg" to=""><img src={instg} alt="miniatura ig" className="redesIcon" /></Link>
                        <Link to=""><img src={facebook} alt="miniatura fb" className="redesIcon" /></Link>
                        <Link to=""><img src={whatsapp} alt="miniatura wpp" className="redesIcon" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer