const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    }
    // userId: {
    //     type: Number
    // }
});

var userItem = mongoose.model("User", userSchema);

module.exports = userItem;