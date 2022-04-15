import React from "react";
import { DateTime } from "luxon";
import "./CommentEntry.css";

const CommentEntry = (props) => {

    const convertedTime = DateTime.fromISO(props.comment.timeStamp).toRelative();

    return (
        <div className="commentsEntry">
            <div className="commentsUser">
                <div>
                    <p>{props.comment.username}</p>
                </div>
                <div>
                    <p>{convertedTime}</p>
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