import React from "react";
import SignIn from "./login/SignIn.jsx";
import SignUp from "./login/SignUp.jsx";
import { Container } from "react-bootstrap";
import AuthProvider from "../context/authContext.js";
import { BrowserRouter as Router, Swtich, Route } from "react-router-dom";

const App = () => {

    return (
        <div>
            <AuthProvider>
                <Container>
                    <SignUp />
                </Container>
            </AuthProvider>
        </div>
    )
}

export default App;