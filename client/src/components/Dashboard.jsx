import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "../context/authContext.js";
import BlogList from "./sub-components/BlogList.jsx";
import { DateTime } from "luxon";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {

    useEffect(() => {
        getUsername();
        getAllBlogs();
    }, []);

    const [ error, setError ] = useState("");
    const [ allBlogs, setAllBlogs ] = useState([]);
    const [ sortedBlogs, setSortedBlogs ] = useState([]);
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
                // console.log("response.data: ", response.data);
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

    const getAllBlogs = async () => {
        try {
            axios.get("/getPosts")
            .then(response => {
                setAllBlogs(response.data);
                sortByMostRecent(response.data);
                // console.log("response.data: ", response.data);
            })
            .catch(err => {
                console.log("Error received during Axios GET request", err);
            })
        } catch {
            console.log("Failed to retrieve posts.");
        }
    }

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
                // console.log(response.data);
                getAllBlogs();
                setBlogInput("");
            })
            .catch(err => {
                console.log("Error received while submitting post.", err);
            })
        } catch {
            console.log("Error received during Axios POST request.");
        }
    }

    const sortByMostRecent = (fullList) => {
        const filteredCopy = [];

        for (var i = 0; i < fullList.length; i++) {
            var totalTime = convertTotalTimeToMinutes(fullList[i].timeStamp);
            filteredCopy.push([fullList[i], totalTime])                   
        }

        filteredCopy.sort((a, b) => {
            return a[1] - b[1];
        })

        const sortedArray = filteredCopy.map((x) => x[0]);
        // console.log("sortedArray: ", sortedArray);
        setSortedBlogs(sortedArray);
    }

    const calculateTimeElapsed = (timeStamp) => {
        const itemDate = DateTime.fromISO(timeStamp);
        const currentTime = DateTime.fromISO(DateTime.now());
        const diff = currentTime.diff(itemDate, ["years", "months", "days", "hours"])
        const diffObj = diff.toObject();
        return diffObj;
    }

    const convertTotalTimeToMinutes = (timeStamp) => {
        let totalMinutes = 0;
        let years = calculateTimeElapsed(timeStamp).years * 525600;
        let months = calculateTimeElapsed(timeStamp).months * 43800;
        let days = calculateTimeElapsed(timeStamp).days * 1440;
        let hours = calculateTimeElapsed(timeStamp).hours * 60;
        
        totalMinutes = years + months + days + hours;
        return totalMinutes;
    }

    return (
        <div className="dashboard">
            <div className="profileLink">
                <h3>Welcome, {username}</h3>
            </div>
            <div className="logOut">
                <button variant="link" onClick={handleLogOut}>Log Out</button>
            </div>
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
                <BlogList 
                    username={username} 
                    blogs={sortedBlogs}
                    getAllBlogs={getAllBlogs}
                />
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
        </div>
    )
}

export default Dashboard;