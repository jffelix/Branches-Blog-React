import React from "react";
import { DateTime } from "luxon";
import axios from "axios";
import "./CommentEntry.css";

const CommentEntry = (props) => {

    const convertedTime = DateTime.fromISO(props.comment.timeStamp).toRelative();

    const deleteComment = () => {
        const selectedId = props.comment._id;
        const deleteObj = {
            postId: props.postId
        }
        console.log("deleteObj: ", deleteObj);
        
        axios.delete(`/deleteComment/${selectedId}`)
        .then(response => {
            console.log("Successfully connected with Axios DELETE request!");
        })
        .catch(err => {
            console.log("Error received during Axios DELETE request.", err);
        })
    }

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
            {
                props.comment.username === props.username ?
                <div className="updateDeleteComment">
                    <div className="updateComment">
                        <button>Edit Comment</button>
                    </div>
                    <div className="deleteComment">
                        <button onClick={deleteComment}>Delete Comment</button>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default CommentEntry;