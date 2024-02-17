import React, { useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Layaout/layaout";
import axios from "axios";
import { useState, useRef } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const navigate = useNavigate()
    
    const handleSignIn = () => {

        axios.post("http://34.16.191.24:3000/api/login/", {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/")
        }
    }, [])


    return (
        <Layout>
            <div className="login-container">
                <div className="login-content">
                    <div className="title-login-form">
                        <h1>Login</h1>
                    </div>
                    <div className="form">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSignIn();
                            }}

                        >
                            <input
                                className="input"
                                name="email"
                                placeholder="email"
                                ref={emailInputRef}
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
        </Layout>
    );
};

export default Login;
