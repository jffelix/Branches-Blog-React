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

const deletePost = async (req, res) => {

    const postId = req.params.id;
    console.log("postId: ", postId);

    // const post = await Post.find()
}

module.exports = {
    createNewPost,
    getAllPosts,
    deletePost
}