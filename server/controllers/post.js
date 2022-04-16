const Post = require("../database/post.js");

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).send(posts);
    } catch {
        return res.status(400).send("Error while fetching posts");
    }
}

const createNewPost = async (req, res) => {
    const postObj = req.body;

    try {
        const post = await Post.create(postObj);
        return res.status(200).send("Post submitted!");

    } catch {
        return res.status(400).send("Error while creating new post");
    }
}

const updatePost = async (req, res) => {
    const postId = req.params.id;
    const updateObj = req.body;
    // console.log("postId: ", postId);
    // console.log("updateObj: ", updateObj);
    try {
        const post = await Post.find({_id: postId});

        if (post.length === 1) {
            const updatePost = await Post.findOneAndUpdate({
                _id: postId
            }, {
                $set: {
                    blog: updateObj.blog,
                    timeStamp: updateObj.timeStamp
                }
            });
            return res.status(200).send("Post updated!");
        }
        return res.status(400).send("Error while updating post.");

    } catch {
        return res.status(400).send("Error while updating post.");
    }
}

const deletePost = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Post.find({_id: postId});
        if (post.length === 1) {
            const deletePost = await Post.findOneAndDelete({_id: postId});
            return res.status(200).send("Post deleted!");
        }
        return res.status(400).send("Error while deleting post.");

    } catch {
        return res.status(400).send("Error while deleting post.");
    }
}

module.exports = {
    createNewPost,
    getAllPosts,
    updatePost,
    deletePost
}