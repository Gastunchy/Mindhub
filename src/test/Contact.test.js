import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom"
import InputContact from '../Components/InputContact';


describe('<inputContact/>', () => {

    test('comprobar si se renderizan todos los inputs', () => {

        render(
            <Router>
                <InputContact/>
            </Router>)
        
        let nombreExiste = screen.getByRole("nameInput")
        let emailExiste = screen.getByRole("emailInput")
        let mensajeExiste = screen.getByRole("msgInput")
        let btnSubmit = screen.getByRole("btnSubmit");

        expect(nombreExiste).toBeInTheDocument()
        expect(emailExiste).toBeInTheDocument()
        expect(mensajeExiste).toBeInTheDocument()
        expect(btnSubmit).toBeInTheDocument();
    });
    test('comprobar funcionamiento de input', () => {

        render(
            <Router>
                <InputContact/>
            </Router>)
        
        let nombreExiste = screen.getByRole("nameInput")
        let emailExiste = screen.getByRole("emailInput")
        let mensajeExiste = screen.getByRole("msgInput")
  

    
        fireEvent.change(nombreExiste, {target: {value: 'Juan'}})
        fireEvent.change(emailExiste, {target: {value: 'Juanpabloguingold@hotmail.com'}})
        fireEvent.change(mensajeExiste, {target: {value: 'Hola queria consultar bla bla'}})
    

    });


  
})

