const { useRef } = require("react");
const { useInRouterContext } = require("react-router-dom");
const Post = require("../database/post.js");
const userItem = require("../database/user.js");

const addComment = async (req, res) => {
    const postObj = req.body;
    console.log("postObj: ", postObj);

    try {
        const post = await Post.find({postId: postObj.postId});
        console.log("post: ", post);

        if (post.length) {
            const post = await Post.findOneAndUpdate({
                postId: postObj.postId
            },
            {
                "$push": {
                    comments: postObj
                }
            })
        }

    } catch {
        return res.status(400).send("Error while creating new comment.");
    }
}

module.exports = {
    addComment
}