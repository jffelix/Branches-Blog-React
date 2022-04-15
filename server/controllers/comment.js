const Post = require("../database/post.js");

const addComment = async (req, res) => {
    console.log("req.body: ", req.body);
}

module.exports = {
    addComment
}