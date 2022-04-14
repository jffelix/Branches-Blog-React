import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/authContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    // need to send userName to Dashboard.jsx
      // useRef()?
        // ref attribute in input tag
    const [ userName, setUserName ] = useState("");
    const { signUp } = useAuth();
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            console.log("userName: ", userName);
            setError("Passwords do not match");
            return;
        }

        try {
            setError("");
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);

            // axios request code below
            let signUpObj = {
                username: userName,
                email: emailRef.current.value
            }

            axios.post("/signup", signUpObj)
            .then(() => {
                console.log("Successfully connected from Axios POST request!");
            })
            .catch(err => {
                console.log(err);
            });
            // axios request code above

            navigate("/dashboard", { replace: true });
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    } 

    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>Username</p>
                    <input type="username" onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <p>Email</p>
                    <input type="email" ref={emailRef} required />
                    <p>Password</p>
                    <input type="password" ref={passwordRef} required />
                    <p>Confirm Password</p>
                    <input type="password" ref={confirmPasswordRef}/>
                    <p></p>
                    <button>Submit</button>
                </form>
                <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </div>
            <div>
                Already have an account? <Link to="/signin">Sign In</Link>
            </div>
        </div>
    )
}

export default SignUp;

