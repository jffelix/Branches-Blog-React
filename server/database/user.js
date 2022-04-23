const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }
    // profilePhoto: {
    //     type: String
    // }
    // ,
    // messages: {
    //     type: Array
    // }
});

var userItem = mongoose.model("User", userSchema);

module.exports = userItem;