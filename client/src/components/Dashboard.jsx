import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/authContext.js";

const Dashboard = () => {

    const [ error, setError ] = useState("");
    const { currentUser, signOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        setError("");

        try {
            await signOut();
            navigate("/", {replace: true});
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <div>
            <h3>Welcome {currentUser.email}</h3>
            <h2>Main Feed</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <div>
                <button variant="link" onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}

export default Dashboard;