import "./style.css"
import logoEvento from "../../assets/img/logoEventox.png"
import { Link } from "react-router-dom";


function Header() {

    return (
        <>

            <header className="header">
                <div className="animated-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <img src={logoEvento} alt="logoParaPegar" role="imagenLogo" id="ImgLogo" className="img-thumbnail" />
                        <h1>Amazing Events </h1>

                        <nav className="navbar navbar-expand-lg navbar-light " >
                            <button className="navbar-toggler" role="btnMenu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" ></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <button role="btnHome" id="boton" type="button" className="btn btn-outline-info">
                                            <li><Link to="/"> Home</Link></li>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button id="boton" role="btnUpC" type="button" className="btn btn-outline-info">
                                            <li><Link to="/UpComing">UpComing Events</Link></li>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button id="boton" type="button" className="btn btn-outline-info">
                                            <li><Link to="/Past">Past Events</Link></li>
                                        </button>

                                    </li>
                                    <li className="nav-item">
                                        <button id="boton" type="button" className="btn btn-outline-info">
                                            <li><Link to="/Contact">Contact</Link></li>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button id="boton" type="button" className="btn btn-outline-info">
                                            <li><Link to="/Stats">Stats</Link></li>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button id="boton" type="button" className="btn btn-outline-info">
                                            <li><Link to="/Login">Login</Link></li>
                                        </button>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </nav>
                </div>
            </header >
        </>
    );
}

export default Header