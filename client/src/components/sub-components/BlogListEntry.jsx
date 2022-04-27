import React, { useState } from "react";
import axios from "axios";
import BlogList from "./BlogList.jsx";
import UserLikes from "./UserLikes.jsx";
import { DateTime } from "luxon";
import "./BlogListEntry.css";
// import Modal from '@mui/material/Modal';
// import { display } from "@mui/system";

const BlogListEntry = (props) => {

    const [ commentInput, setCommentInput] = useState("");
    const [ displayUpdateInput, setDisplayUpdateInput] = useState(false);
    const [ wasPostLiked, setWasPostLiked ] = useState(false);
    const [ displayLikes, setDisplayLikes ] = useState(false);
    const [ updatePostInput, setUpdatePostInput ] = useState("");
    const convertedTime = DateTime.fromISO(props.blog.timeStamp).toRelative();

    const submitComment = (e) => {
        e.preventDefault();

        if (commentInput.length === 0) {
            alert("Input field cannot be empty.");
            return;
        }
        let commentObj = {
            username: props.username,
            comment: commentInput,
            timeStamp: DateTime.now().toISO(),
            likes: 0,
            postId: props.blog._id
        }

        axios.post("/createComment", commentObj)
        .then(response => {
            console.log("Succesfully connected with Axios POST request!");
            props.getAllBlogs();
            setCommentInput("");
        })
        .catch(err => {
            console.log("Error received during Axios POST request", err);
        })
    }

    const selectEditPost = () => {
        setDisplayUpdateInput(true);
    }

    const submitUpdate = () => {        
        const updateObj = {
            postId: props.blog._id,
            blog: updatePostInput,
            timeStamp: DateTime.now().toISO()
        }
        // console.log("updateObj: ", updateObj);

        axios.patch(`/updatePost/${props.blog._id}`, updateObj)
        .then(response => {
            console.log("Successfully connected with Axios PATCH request!");
            props.getAllBlogs();
        })
        .catch(err => {
            console.log("Error received during Axios PATCH request.", err);
        })
        
        setUpdatePostInput("");
        setDisplayUpdateInput(false);
    }

    const cancelUpdate = () => {
        setDisplayUpdateInput(false);
    }

    const likePost = () => {
        const updateObj = {
            _id: props.blog._id,
            likes: props.blog.likes
        }

        if (!wasPostLiked) {
            updateObj.likes++;
        } else {
            updateObj.likes--;
        }

        axios.patch(`/like/${props.blog._id}`, updateObj)
        .then(response => {
            console.log("Successfully connected with Axios PATCH request!")
            props.getAllBlogs();
        })
        .catch(err => {
            console.log("Error received during Axios PATCH request.");
        })

        if (!wasPostLiked) {
            setWasPostLiked(true);
        } else {
            setWasPostLiked(false);
        }

    }

    const seeLikes = () => {
        console.log("Hello from seeLikes!");
        setDisplayLikes(true);
    }

    const hideLikes = () => {
        console.log("Hello from hideLikes!");
        setDisplayLikes(false);
    }

    const deletePost = () => {
        const selectedPostId = props.blog._id;
        
        axios.delete(`/deletePost/${selectedPostId}`)
        .then(response => {
            console.log("Successfully connected with Axios DELETE request!");
            props.getAllBlogs();
        })
        .catch(err => {
            console.log("Error received during Axios DELETE request.", err);
        })
    }

    return (
        <div className="blogs">
            <div className="blogUser">
                <div className="blogUsername">
                    <p>{props.blog.username}</p>
                </div>
                <div className="convertedTime">
                    <p>{convertedTime}</p>
                </div>
            </div>
            <div className="blog">
                <h4>{props.blog.blog}</h4>
            </div>
            <div className="blogLikes" onClick={seeLikes}>
                <p>Likes: {props.blog.likes}</p>
            </div>
            <div>
                <UserLikes 
                    displayLikes={displayLikes} 
                    hideLikes={hideLikes}
                />
            </div>
            { !wasPostLiked ?
                <div className="likePost">
                    <button onClick={likePost}>Like</button>
                </div>
                :
                <div className="unlikePost">
                    <button onClick={likePost}>Unlike</button>
                </div> 
            }
            {
                props.username === props.blog.username ?
                <div>
                    { !displayUpdateInput ?
                        <div className="updateDeletePost">
                            <div className="updatePost">
                                <button onClick={selectEditPost}>Edit Post</button>
                            </div>
                            <div className="deletePost">
                                <button onClick={deletePost}>Delete Post</button>
                            </div>
                        </div>
                        : 
                        <div>
                            <div className="updatePostForm">
                                <input onChange={(e) => setUpdatePostInput(e.target.value)} value={updatePostInput}/>
                            </div>
                            <div className="updatePostInput">
                                <div className="submitUpdate">
                                    <button onClick={submitUpdate}>Submit Update</button>
                                </div>
                                <div className="cancelUpdate">
                                    <button onClick={cancelUpdate}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                :
                null
            }
            <div className="commentsText">
                <p>Comments</p>
            </div>
            <div className="comments">
                <BlogList 
                    comments={props.blog.comments}
                    username={props.username}
                    postId={props.blog._id}
                    getAllBlogs={props.getAllBlogs}
                />
            </div>
            <div className="addComment">
                <div className="addCommentText">
                    <p>Add Comment</p>
                </div>
                <form onSubmit={(e) => submitComment(e)}>
                    <input type="comment" onChange={(e) => setCommentInput(e.target.value)} value={commentInput} />
                    <p></p>
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}

export default BlogListEntry;
