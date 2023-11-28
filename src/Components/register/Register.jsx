import React from "react";
import ("../register/register.css");


const register = () => {

    return (
        <div className="register-container">
            <div className="register-content">
                <div className="title-register-form">
                    <h1>Register</h1>
                </div>
                <div className="form">
                    <form action="" > 
                        <input
                            name="nombre"
                            className="input"
                            placeholder="name"
                            type={"text"}
                        />
                        <input
                            name="apellido"
                            className="input"
                            placeholder="lastname"
                            type={"text"}
                        />
                        <input
                            name="dni"
                            className="input"
                            placeholder="Id/Passaport ID/DNI/NIE"
                            type={"number"}
                        />
                        <input
                            name="fecha_nacimiento"
                            className="input"
                            placeholder="date of birth"
                            type={"date"}
                        />
                        <input
                            className="input"
                            name="email"
                            placeholder="Tu email"
                            type={"email"}
                        />
                        <input
                            className="input"
                            name="password"
                            placeholder="password"
                            type={"password"}
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