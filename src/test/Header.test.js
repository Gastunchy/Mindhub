import { render, screen , fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Components/Header"
import { BrowserRouter as Router } from "react-router-dom"

describe('<Header/>', () => {

    test('Se renderiza correctamente el Titulo H1', () => {

        render(
            <Router>
                <Header/>
            </Router>)
        let tituloExiste = screen.getByText("Amazing Events")
        expect(tituloExiste).toBeInTheDocument()
    })

    test('Se renderiza correctamente la imagen', () => {

        render(
            <Router>
                <Header />
            </Router>)
        let imagenExiste = screen.getByRole("imagenLogo")
        expect(imagenExiste).toBeInTheDocument()
    })
    test('Se renderiza correctamente el boton Home', () => {

        render(
            <Router>
                <Header />
            </Router>)
        let btnHomeExiste = screen.getByRole("btnHome")
        expect(btnHomeExiste).toBeInTheDocument()
    })
    
    test('se renderiza bien el boton menu de despliegue para telefonos', () => {
        render(
            <Router>
                <Header />
            </Router>)
        let btnMenuExiste = screen.getByRole("btnMenu")
        expect(btnMenuExiste).toBeInTheDocument()
    });

})

