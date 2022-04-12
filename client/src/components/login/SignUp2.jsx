import React, { useState } from "react";
import PasswordInput from "./PasswordInput.jsx";

const SignUp2 = () => {

    const [ userName, setUserName ] = useState([]);
    const [ userEmail, setUserEmail ] = useState([]);

    return (
        <div>
            <div className="userEmail">
                <h3>Create an account</h3>
                <p>Email</p>
                <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail}/>
                </div>
            <div>
                <PasswordInput
                userEmail={userEmail} />
            </div>
            <div>
                <h3>Already have an account?</h3>
                <button>Log In</button>
            </div>
        </div>
    )
}

export default SignUp2;