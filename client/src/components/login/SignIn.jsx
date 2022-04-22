import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/authContext.js";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn } = useAuth();
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await signIn(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard", { replace: true });
        } catch {
            setError("Failed to sign in");
        }
        setLoading(false);
    } 

    return (
        <div className="fullSignIn">
        <div className="signIn">
            <h2>Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={(e) => handleSubmit(e)}>
                <p>Email</p>
                <input type="email" ref={emailRef} required />
                <p>Password</p>
                <input type="password" ref={passwordRef} required />
                <p></p>
                <button>Log In</button>
            </form>
            <div>
                Don't have an account? <Link to="/">Sign Up</Link>
            </div>
        </div>
        </div>
    )
}

export default SignIn;
