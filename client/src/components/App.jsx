import React from "react";
import SignIn from "./login/SignIn.jsx";
import SignUp from "./login/SignUp.jsx";
import { Container } from "react-bootstrap";
import AuthProvider from "../context/authContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <div>
            <Container>
            <div>
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<SignUp />} />
                        </Routes>
                    </AuthProvider>
                </Router>
            </div>
            </Container>
        </div>
    )
}

export default App;