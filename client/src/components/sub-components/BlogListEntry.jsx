import React from "react";
import BlogList from "./BlogList.jsx";

const BlogListEntry = (props) => {

    return (
        <div>
            <h4>{props.blog.blog}</h4>
            <p>{props.blog.username}</p>
            <p>{props.blog.timeStamp}</p>
            <p>Likes: {props.blog.likes}</p>
            <BlogList comments={props.blog.comments} />
        </div>
    )
}

export default BlogListEntry;