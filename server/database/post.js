const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username: {
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
    userId: {
        type: Number
    }
});

var postItem = mongoose.model("Post", postSchema);

module.exports = postItem;