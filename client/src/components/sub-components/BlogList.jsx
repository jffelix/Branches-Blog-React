import React from "react";
import BlogListEntry from "./BlogListEntry.jsx";
import CommentEntry from "./CommentEntry.jsx";

const BlogList = (props) => {

    if (props.blogs) {
        
        return (
            <div>
                {props.blogs.map((blog, index) =>
                    <BlogListEntry 
                        blog={blog} 
                        key={index} 
                        username={props.username}
                        getAllBlogs={props.getAllBlogs}
                    />
                )}
            </div>
        )
    } else if (props.comments) {

        return (
            <div>
                {props.comments.map((comment, index) => 
                    <CommentEntry 
                        comment={comment} 
                        key={index}
                        username={props.username}
                        postId={props.postId}
                    />
                )}
            </div>
        )
    }
}

export default BlogList;