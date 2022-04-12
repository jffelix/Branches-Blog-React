import React from "react";
import SignIn from "./login/SignIn.jsx";
import SignUp from "./login/SignUp.jsx";
import Dashboard from "./Dashboard.jsx";
import ForgotPassword from "./login/ForgotPassword.jsx";
import { Container } from "react-bootstrap";
import AuthProvider from "../context/authContext.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// if logged in user does not have a username
  // redirect to create username
    // add username to database
      // redirect to dashboard
// else
  // redirect to dashboard

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