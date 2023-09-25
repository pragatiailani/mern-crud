const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

//* run this "pre" of "save" function. working as a middleware to hash password before saving.
userSchema.pre('save', async function (next) {
    //* work only if their is password field
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//* IT IS WORKING PROPERLY WHEN I WRITE "USER" OR "user" OR "users"
const User = mongoose.model("users", userSchema);

module.exports = User;