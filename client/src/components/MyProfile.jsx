import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MyProfile = () => {

    const backToDashboard = () => {
        navigate("/dashboard", { replace: true });
    }

    return (
        <div>
            <h3>Hello from MyProfile!</h3>
            <button onClick={backToDashboard}>Back to Dashboard</button>
        </div>
    )
}

export default MyProfile;