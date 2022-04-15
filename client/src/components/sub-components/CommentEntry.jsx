import React from "react";

const CommentEntry = (props) => {

    return (
        <div>
            <p>{props.comment.username}</p>
            <p>{props.comment.comment}</p>
            <p>Likes: {props.comment.likes}</p>
        </div>
    )
}

export default CommentEntry;