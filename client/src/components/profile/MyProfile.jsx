import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MyProfile = () => {

    useEffect(() => {
        getUsername();
    })

    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [ userId, setUserId ] = useState("");
    const [ username, setUsername ] = useState("");

    const backToDashboard = () => {
        navigate("/dashboard", { replace: true });
    }

    const getUsername = async () => {

        try {
            axios.get(`/signup/${currentUser.email}`)
            .then(response => {
                setUserId(response.data[0]._id);
                setUsername(response.data[0].username);
                console.log("response.data: ", response.data);
            })
            .catch(err => {
                console.log("Error received during Axios GET request.")
            })

        } catch {
            console.log("Failed to retrieve username.");
        }
    }

    return (
        <div>
            <h3>{username} Profile</h3>
            <button onClick={backToDashboard}>Back to Dashboard</button>
        </div>
    )
}

export default MyProfile;