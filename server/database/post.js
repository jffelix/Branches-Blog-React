const mongoose = require("mongoose");

// Do not create "comments" array property until schema is functional
// Find how to make timestamp similar to now()
// Find how to connect userId to email or mongodb "_id"

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
    timeStamp: {
        type: String
    },
    likes: {
        type: Number
    }
    // blogId: {
    //     type: Number
    // },
});

var postItem = mongoose.model("Post", postSchema);

module.exports = postItem;