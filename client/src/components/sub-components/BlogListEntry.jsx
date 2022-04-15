import React, { useState } from "react";
import axios from "axios";
import BlogList from "./BlogList.jsx";
import { DateTime } from "luxon";
import "./BlogListEntry.css";

const BlogListEntry = (props) => {

    const [ commentInput, setCommentInput] = useState("");

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

    return (
        <div className="blogs">
            <h4>{props.blog.blog}</h4>
            <p>{props.blog.username}</p>
            <p>{props.blog.timeStamp}</p>
            <p>Likes: {props.blog.likes}</p>
            <div className="comments">
                <p>Comments</p>
                <BlogList comments={props.blog.comments} />
            </div>
            <div className="addComment">
                <p>Add Comment</p>
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