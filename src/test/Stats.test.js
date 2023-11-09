import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter as Router } from "react-router-dom"

import Stats from "../pages/Stats"
import { Provider } from "react-redux"

describe('<Stats/>', () => {
    test('Se renderizan bien la pagina', () => {

        render(
            <Provider>
                <Router>
                    <Stats />
                </Router>
            </Provider>
        )
        let tituloExiste = screen.getByText("Stats")
        expect(tituloExiste).toBeInTheDocument()
    });



})