const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    work: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});

//* run this "pre" of "save" function. working as a middleware to hash password before saving.
userSchema.pre("save", async function (next) {
    //* work only if their is password field
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

//* GENERATING TOKEN
userSchema.methods.generateAuthToken = async function () {
    try {
        let new_token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: new_token });
        await this.save();
        return new_token;
    } catch (err) {
        console.log(err);
    }
};

//* IT IS WORKING PROPERLY WHEN I WRITE "USER" OR "user" OR "users"
const User = mongoose.model("users", userSchema);

module.exports = User;
