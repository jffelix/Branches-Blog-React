import React from "react";
import SignIn from "./login/SignIn.jsx";
import SignUp from "./login/SignUp.jsx";
import Dashboard from "./Dashboard.jsx";
import MyProfile from "./profile/MyProfile.jsx";
import ForgotPassword from "./login/ForgotPassword.jsx";
import { Container } from "react-bootstrap";
import AuthProvider from "../context/authContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <div>
            {/* <Container> */}
            <div>
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route exact path="/" element={<SignUp />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/dashboard" element={<Dashboard />}/>
                            <Route path="/myprofile" element={<MyProfile />} />
                            <Route path="/forgot-password" element={<ForgotPassword />}/>
                        </Routes>
                    </AuthProvider>
                </Router>
            </div>
            {/* </Container> */}
        </div>
    )
}

export default App;