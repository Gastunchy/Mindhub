
import("../register/register.css");
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef } from "react";


const register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [fecha_nacimiento, setFecha_nacimiento] = useState("");

    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const nameImputRef = useRef()
    const lastNameInputRef = useRef()
    const dniInputRef = useRef()
    const dateInputRef = useRef()

    const navigate = useNavigate()
    const handleRegister = () => {

        axios.post("localhost:3000/api/register/", {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            name: nameImputRef.current.value,
            lastName: lastNameInputRef.current.value,
            dni: dniInputRef.current.value,
            age: dateInputRef.current.value
        })
            .then((response) => {
        
                alert("Register completed successfully")
                navigate("/login")
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (

        <div className="register-container">
            <div className="register-content">
                <div className="title-register-form">
                    <h1>Register</h1>
                </div>
                <div className="form">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleRegister();
                    }
                    }>
                        <input
                            name="nombre"
                            ref={nameImputRef}
                            className="input"
                            placeholder="name"
                            type={"text"}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input
                            name="apellido"
                            ref={lastNameInputRef}
                            className="input"
                            placeholder="lastname"
                            type={"text"}
                            onChange={(e) => setApellido(e.target.value)}
                            
                        />
                        <input
                            name="dni"
                            ref={dniInputRef}
                            className="input"
                            placeholder="Id/Passaport ID/DNI/NIE"
                            type={"number"}
                            onChange={(e) => setDni(e.target.value)}
                        />
                        <input
                            name="fecha_nacimiento"
                            ref={dateInputRef}
                            className="input"
                            placeholder="date of birth"
                            type={"date"}
                            onChange={(e) => setFecha_nacimiento(e.target.value)}
                        />
                        <input
                            className="input"
                            ref={emailInputRef}
                            name="email"
                            placeholder="Tu email"
                            type={"email"}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="input"
                            name="password"
                            ref={passwordInputRef}
                            placeholder="password"
                            type={"password"}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="button-form-register"
                            type="submit"
                            value={"submit"}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default register
