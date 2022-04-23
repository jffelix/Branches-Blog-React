const mongoose = require("mongoose");
// const Comment = require("./comment.js");

// Find how to connect userId to email or mongodb "_id"

// this should be in comment.js
const commentSchema = new mongoose.Schema({
    username: {
        type: String
    },
    comment: {
        type: String
    },
    timeStamp: {
        type: String
    },
    likes: {
        type: Number
    },
    postId: {
        type: String
    }
    // userLikes: {
    //     type: Array
    // }
});

const postSchema = new mongoose.Schema({
    username: {
        type: String
    },
    userId: {
        type: String
    },
    blog: {
        type: String
    },
    timeStamp: {
        type: String
    },
    likes: {
        type: Number
    },
    comments: {
        type: [commentSchema]
    }
    // userLikes: {
    //     type: Array
    // }
});

var postItem = mongoose.model("Post", postSchema);

module.exports = postItem;