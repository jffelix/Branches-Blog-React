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
    console.log("req.body: ", req.body);

    try {

        const post = await Post.create(postObj);
        return res.status(200).send("Post submitted!");

    } catch {
        res.status(400).send("Error while creating new post");
    }

}

module.exports = {
    createNewPost,
    getAllPosts
}