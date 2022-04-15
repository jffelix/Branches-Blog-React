import React from "react";
import "./CommentEntry.css";

const CommentEntry = (props) => {

    return (
        <div className="comments">
            <p>{props.comment.username}</p>
            <p>{props.comment.timeStamp}</p>
            <p>{props.comment.comment}</p>
            <p>Likes: {props.comment.likes}</p>
        </div>
    )
}

export default CommentEntry;