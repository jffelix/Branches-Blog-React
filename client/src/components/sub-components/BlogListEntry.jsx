import React, { useState } from "react";
import axios from "axios";
import BlogList from "./BlogList.jsx";

const BlogListEntry = (props) => {

    const [ commentInput, setCommentInput] = useState("");

    const submitComment = (e) => {
        e.preventDefault();

        let commentObj = {
            username: props.blog.username,
            comment: commentInput,
            postId: props.blog._id
        }

        console.log("commentObj: ", commentObj);
    }

    return (
        <div>
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