const mongoose = require("mongoose");

// Do not use until Post schema is functional

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
    userId: {
        type: Number
    }
});

var commentItem = mongoose.model("Post", commentSchema);

module.exports = commentItem;