const { useRef } = require("react");
const { useInRouterContext } = require("react-router-dom");
const Post = require("../database/post.js");
const userItem = require("../database/user.js");

const addComment = async (req, res) => {
    const postObj = req.body;

    try {
        const post = await Post.find({_id: postObj.postId});

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

const updateComment = async (req, res) => {
    const commentId = req.params.id;
    const postId = req.body.postId;

    try {
        const post = await Post.find({ _id: postId });

        if (post.length === 1) {
            const updatePost = await Post.findOneAndUpdate({
                _id: postId,
                comments: {
                    $elemMatch: {
                        _id: commentId
                    }
                }
            }, {
                $set: {
                    "comments.$.username": req.body.username,
                    "comments.$.comment": req.body.comment,
                    "comments.$.timeStamp": req.body.timeStamp,
                    "comments.$.likes": req.body.likes
                }
            });
            return res.status(200).send("Post updated!");
        }
        return res.status(400).send("Error while updating post.");

    } catch {
        return res.status(400).send("Error while updating post.");
    }
}


const deleteComment = async (req, res) => {
    const commentId = req.params.id;
    const postId = req.body.postId;

    try {
        // remember the comment is in a nested array
          // with Post, it will only reveal the post, not the comment
        const post = await Post.find({_id: postId})

        if (post.length === 1) {
            const deletePost = await Post.findOneAndUpdate({
                _id: postId
            }, {
                $pull: {
                    comments: {
                        _id: commentId
                    }
                }
            });
            return res.status(200).send("Post deleted!");
        }
        return res.status(400).send("Error while deleting post.");

    } catch {
        return res.status(400).send("Error while deleting post.");
    }
}

module.exports = {
    addComment,
    updateComment,
    deleteComment
}
