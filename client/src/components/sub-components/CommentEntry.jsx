import React, { useState } from "react";
import { DateTime } from "luxon";
import axios from "axios";
import "./CommentEntry.css";

const CommentEntry = (props) => {

    const [ displayUpdateField, setDisplayUpdateField ] = useState(false);
    const [ wasCommentLiked, setWasCommentLiked ] = useState(false);
    const [ updateCommentInput, setUpdateCommentInput ] = useState("");
    const convertedTime = DateTime.fromISO(props.comment.timeStamp).toRelative();

    const selectEditComnment = () => {
        setDisplayUpdateField(true);
    }

    const submitUpdateComment = () => {
        const updateObj = {
            username: props.username,
            postId: props.postId,
            comment: updateCommentInput,
            timeStamp: DateTime.now().toISO(),
            likes: 0
        }

        
        axios.patch(`/updateComment/${props.comment._id}`, updateObj)
        .then(response => {
            console.log("Successfully connected with Axios PATCH request!");
            props.getAllBlogs();
        })
        .catch(err => {
            console.log("Error received during Axios PATCH request.", err);
        })

        setUpdateCommentInput("");
        setDisplayUpdateField(false);
    }

    const cancelUpdate = () => {
        setDisplayUpdateField(false);
    }

    const deleteComment = () => {
        const selectedId = props.comment._id;
        const deleteObj = {
            postId: props.postId
        }
        
        axios.delete(`/deleteComment/${selectedId}`, {
            data: deleteObj
        })
        .then(response => {
            console.log(response.data);
            props.getAllBlogs();
        })
        .catch(err => {
            console.log("Error received during Axios DELETE request.", err);
        })
    }

    const likeComment = () => {
        // console.log("props.comment._id: ", props.comment._id);
        axios.patch(`/likeComment/${props.comment._id}`)
        .then(response => {
            console.log("Successfully connected with Axios PATCH request!")
            props.getAllBlogs();
        })
        .catch(err => {
            console.log("Error received during Axios PATCH request.");
        })
        setWasCommentLiked(true);
    }

    const unlikeComment = () => {
        // axios.patch(`/unlikeComment/${props.comment._id}`)
        // .then(response => {
        //     console.log("Successfully connected with Axios PATCH request!")
        //     props.getAllBlogs();
        // })
        // .catch(err => {
        //     console.log("Error received during Axios PATCH request.");
        // })
        setWasCommentLiked(false);
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
            { !wasCommentLiked ?
                <div className="likeComment">
                    <button onClick={likeComment}>Like</button>
                </div>
                :
                <div className="unlikeComment">
                    <button onClick={unlikeComment}>Unlike</button>
                </div> 
            }
            {
                props.comment.username === props.username ?
                <div>
                    { !displayUpdateField ?
                        <div className="updateDeleteComment">
                            <div className="updateComment">
                                <button onClick={selectEditComnment}>Edit Comment</button>
                            </div>
                            <div className="deleteComment">
                                <button onClick={deleteComment}>Delete Comment</button>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="updateCommentForm">
                                <input onChange={(e) => setUpdateCommentInput(e.target.value)} value={updateCommentInput}/>
                            </div>
                            <div className="updateCommentInput">
                                <div className="submitUpdate">
                                    <button onClick={submitUpdateComment}>Submit Update</button>
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
        </div>
    )
}

export default CommentEntry;