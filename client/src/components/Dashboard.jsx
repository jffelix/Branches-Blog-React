import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/authContext.js";
import BlogList from "./sub-components/BlogList.jsx";

import sampleBlogs from "./sampleBlogs";
import { DateTime } from "luxon";
import axios from "axios";

const Dashboard = () => {

    useEffect(() => {
        getUsername();
    }, []);

    const [ error, setError ] = useState("");
    // will be used for GET request on all posted blogs
    const [ allBlogs, setAllBlogs ] = useState([]);
    const [ blogInput, setBlogInput ] = useState("");
    const { currentUser, signOut } = useAuth();
    const [ userId, setUserId ] = useState("");
    const [ username, setUsername ] = useState("");
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

    const getUsername = async () => {
        try {
            axios.get(`/signup/${currentUser.email}`)
            .then(response => {
                console.log("response.data: ", response.data);
                setUserId(response.data[0]._id);
                setUsername(response.data[0].username);
            })
            .catch(err => {
                console.log("Error received during Axios GET request.")
            })

        } catch {
            console.log("Failed to retrieve username.");
        }
    }

    // turn into async function later
    const submitNewPost = async (e) => {
        e.preventDefault();

        let postObj = {
            username: username,
            userId: userId,
            blog: blogInput,
            timeStamp: DateTime.now().toISO(),
            likes: 0
        };

        try {

            axios.post("/createPost", postObj)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log("Error received while submitting post.", err);
            })

        } catch {
            console.log("Error received during Axios POST request.");
        }
    }


    return (
        <div>
            <h3>Welcome {username}!</h3>
            <div className="createPost">
                <h2>Create New Post</h2>
                <p>Type what you're thinking . . .</p>
                <form onSubmit={(e) => submitNewPost(e)}>
                    <input type="blog" onChange={(e) => setBlogInput(e.target.value)} value={blogInput} />
                    <p></p>
                    <button>Post</button>
                </form>
            </div>
            <div className="mainFeed">  
                <h2>Main Feed</h2>
                <BlogList blogs={sampleBlogs}/>
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
            <div className="logOut">
                <button variant="link" onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    )
}

export default Dashboard;