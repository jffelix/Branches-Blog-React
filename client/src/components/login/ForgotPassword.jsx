import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/authContext.js";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const emailRef = useRef();
    // const passwordRef = useRef();
    const { signIn } = useAuth();
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            // await signIn(emailRef.current.value, passwordRef.current.value);
            navigate("/signin", { replace: true });
        } catch {
            setError("Failed to reset password.");
        }
        setLoading(false);
    } 

    return (
        <div className="fullForgotPassword">
            <div className="forgotPassword">
                <h2>Password Reset</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p>Email</p>
                    <input type="email" ref={emailRef} required />
                    <p></p>
                    <button>Reset Password</button>
                </form>
                <div>
                    Remembered your password? <Link to="/signin">Log In</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const ForgotPassword = () => {

//     const navigate = useNavigate();

//     const backToSignUp = () => {
//         navigate("/", { replace: true });
//     }


//     return (
//         <div>
//             <h3>Page under construction. Please return to Sign Up</h3>
//             <button onClick={backToSignUp}>Back to Sign Up</button>
//         </div>
//     )
// }

// export default ForgotPassword;