import React from "react";
import BlogListEntry from "./BlogListEntry.jsx";

const BlogList = (props) => {

    return (
        <div>
            {props.blogs.map((blog, index) =>
                <BlogListEntry blog={blog} key={index} />
            )}
        </div>
    )
}

export default BlogList;