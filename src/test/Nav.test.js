import { render, screen , fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import Nav from "../Components/Nav"
import { BrowserRouter as Router } from "react-router-dom"

describe('<Nav/>', () => {

    test('Se renderiza correctamente el h3', () => {

        render(
            <Router>
                <Nav/>
            </Router>)
        let tituloExiste = screen.getByRole("navbarH3")
        expect(tituloExiste).toBeInTheDocument()
    })
})