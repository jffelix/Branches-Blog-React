import React from "react";
import "./CommentEntry.css";

const CommentEntry = (props) => {

    return (
        <div className="commentsEntry">
            <div className="commentsUser">
                <div>
                    <p>{props.comment.username}</p>
                </div>
                <div>
                    <p>{props.comment.timeStamp}</p>
                </div>
            </div>
            <div className="commentText">
                <p>{props.comment.comment}</p>
            </div>
            <div className="commentLikes">
                <p>Likes: {props.comment.likes}</p>
            </div>
        </div>
    )
}

export default CommentEntry;