import React, { useState } from "react";
import axios from "axios";
import BlogList from "./BlogList.jsx";
import { DateTime } from "luxon";
import "./BlogListEntry.css";

const BlogListEntry = (props) => {

    const [ commentInput, setCommentInput] = useState("");
    const convertedTime = DateTime.fromISO(props.blog.timeStamp).toRelative();

    const submitComment = (e) => {
        e.preventDefault();

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

    const updatePost = () => {
        console.log("Hello from updatePost!");
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
                <div>
                    <p>{props.blog.username}</p>
                </div>
                <div>
                    <p>{convertedTime}</p>
                </div>
            </div>
            <div className="blog">
                <h4>{props.blog.blog}</h4>
            </div>
            <div className="blogLikes">
                <p>Likes: {props.blog.likes}</p>
            </div>
            {
                props.username === props.blog.username ?
                <div className="updateDeletePost">
                    <div className="updatePost">
                        <button onClick={updatePost}>Edit Post</button>
                    </div>
                    <div className="deletePost">
                        <button onClick={deletePost}>Delete Post</button>
                    </div>
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