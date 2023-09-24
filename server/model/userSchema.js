const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//* IT IS WORKING PROPERLY WHEN I WRITE "USER" OR "user" OR "users"

const User = mongoose.model("users", userSchema);

module.exports = User;