import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MyProfile = () => {

    useEffect(() => {
        getUsername();
        // getUserBlogs();
    }, [])

    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [ userId, setUserId ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ userBlogs, setUserBlogs ] = useState([]);

    const backToDashboard = () => {
        navigate("/dashboard", { replace: true });
    }

    const getUsername = async () => {

        try {
            axios.get(`/signup/${currentUser.email}`)
            .then(response => {
                setUserId(response.data[0]._id);
                setUsername(response.data[0].username);
                getUserBlogs(response.data[0]._id)
                // console.log("response.data: ", response.data);
            })
            .catch(err => {
                console.log("Error received during Axios GET request.")
            })

        } catch {
            console.log("Failed to retrieve username.");
        }
    }

    const getUserBlogs = async (id) => {
        try {
            axios.get(`/userPosts/${id}`)
            .then(response => {
                console.log("response.data: ", response.data);
                // setUserBlogs(response.data);
                // sortByMostRecent(response.data);
            })
            .catch(err => {
                console.log("Error received during Axios GET request", err);
            })
        } catch {
            console.log("Failed to retrieve posts.");
        }
    }

    return (
        <div>
            <div className="userHeader">
                <h3>{username} Profile</h3>
            </div>
            <div className="backToDashboard">
                <button onClick={backToDashboard}>Back to Dashboard</button>
            </div>
            <div className="userBlogs">
                <h2>Your Blogs</h2>
            </div>
        </div>
    )
}

export default MyProfile;