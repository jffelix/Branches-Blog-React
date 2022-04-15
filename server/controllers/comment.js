const { useRef } = require("react");
const { useInRouterContext } = require("react-router-dom");
const Post = require("../database/post.js");
const userItem = require("../database/user.js");

const addComment = async (req, res) => {
    const postObj = req.body;
    console.log("postObj: ", postObj);

    try {
        const post = await Post.find({_id: postObj.postId});
        console.log("post: ", post);

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

module.exports = {
    addComment
}