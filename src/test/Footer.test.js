import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Footer from "../Components/Footer"

describe('<Footer/>', () => {
    test('Se renderiza bien la carta del Footer', () => {

        render(
            <Router>  
             <Footer/>
            </Router>
        )
        let cardElement = screen.getByRole("cardFooter")
        expect(cardElement).toBeInTheDocument()
    });

    test('Se renderiza bien el boton de Home', () => {

        render(
            <Router>  
             <Footer/>
            </Router>
        )
        let btnHomeElement= screen.getByRole("btnHomeFooter")
        expect(btnHomeElement).toBeInTheDocument()
    });

    test('Se renderiza bien el boton de IG', () => {

        render(
            <Router>  
             <Footer/>
            </Router>
        )
        let btnIgFooter= screen.getByRole("btnIg")
        expect(btnIgFooter).toBeInTheDocument()
    });
        //Testear si al hacer click, lleva al ig
        //lo mismo con las otras redes
        //si los botones, llevan a la pagina correspondiente
        



})