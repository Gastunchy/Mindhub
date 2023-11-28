import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="title-login-form">
                    <h1>Login</h1>
                </div>
                <div className="form">
                    <form
                        action="mailto:metrica.agenciamkt@gmail.com"
                        method="POST"
                        encType="text/plain"
                    >
                        <input
                            className="input"
                            name="email"
                            placeholder="email"
                            type={"email"}
                        />
                        <input
                            className="input"
                            name="password"
                            placeholder="password"
                            type={"password"}
                        />

                        <div className="div-button">
                            <button
                                className="button-form-login"
                                type="submit"
                                value={"submit"}
                            >
                                Login
                            </button>
                            <Link to="/forgot-password" className="forgotPassword">forgot password?</Link>
                            <br />
                            <Link to="/register">Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
