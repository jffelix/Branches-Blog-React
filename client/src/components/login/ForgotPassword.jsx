import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const backToSignUp = () => {

        navigate("/", { replace: true });
    }


    return (
        <div>
            <h3>Hello from ForgotPassword Component!</h3>
            <button onClick={backToSignUp}>Back to Sign Up</button>
        </div>
    )
}

export default ForgotPassword;