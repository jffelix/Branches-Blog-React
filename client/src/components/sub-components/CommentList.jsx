import React from "react";
import CommentEntry from "./CommentEntry.jsx";

const CommentList = (props) => {

    return (
        <div>
            {props.comments.map((comment, index) => 
                <CommentEntry 
                    comment={comment} 
                    key={index}
                    username={props.username}
                />
            )}
        </div>
    )
}

export default CommentList;