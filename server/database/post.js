const mongoose = require("mongoose");

// Do not use until User schema is functional

const postSchema = new mongoose.Schema({
    username: {
        type: String
    },
    userId: {
        type: Number
    },
    blog: {
        type: String
    },
    blogId: {
        type: Number
    },
    timeStamp: {
        type: String
    },
    likes: {
        type: Number
    }
});

var postItem = mongoose.model("Post", postSchema);

module.exports = postItem;