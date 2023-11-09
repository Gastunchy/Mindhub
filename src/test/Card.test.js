import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Card from "../Components/Cards/card"

describe('<Card/>', () => {
    test('Se renderiza bien la card de evento', () => {

        render(
            <Router>  
             <Card eventos={{name: "Jurassic Park",}}/>
            </Router>
        )
        let cardElementName = screen.getByText("Jurassic Park")

        expect(cardElementName).toBeInTheDocument()
    });

   

})