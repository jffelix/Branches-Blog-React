const { useRef } = require("react");
const { useInRouterContext } = require("react-router-dom");
const Post = require("../database/post.js");
const userItem = require("../database/user.js");

const addComment = async (req, res) => {
    const postObj = req.body;
    // console.log("postObj: ", postObj);
    try {
        const post = await Post.find({_id: postObj.postId});
        // console.log("post: ", post);
        if (post.length === 1) {
            const post = await Post.findOneAndUpdate({
                _id: postObj.postId
            },
            {
                "$push": {
                    comments: postObj
                }
            })
        }
        return res.status(200).send("Comment submitted!");

    } catch {
        return res.status(400).send("Error while creating new comment.");
    }
}


const deleteComment = async (req, res) => {
    const commentId = req.params.id;
    const postId = req.body.postId;
    console.log("commentId: ", commentId);
    console.log("postId: ", postId);

    try {
        // remember the comment is in a nested array
          // with Post, it will only reveal the post, not the comment
        const post = await Post.findOneAndUpdate({
            _id: postId
        }, {
            $pull: {
                comments: {
                    _id: commentId
                }
            }
        });

        console.log("post: ", post);

        // if (post.length === 1) {
        //     // console.log("post: ", post);
        //     const deleteComment = await Post.findOneAndDelete({_id: commentId});
        //     return res.status(200).send("Post deleted!");
        // }
        // return res.status(400).send("Error while deleting post.");

    } catch {
        return res.status(400).send("Error while deleting post.");
    }
}

module.exports = {
    addComment,
    deleteComment
}