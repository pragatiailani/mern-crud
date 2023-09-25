const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/db");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send(`We are running from router`);
});

//* FOR REGISTERATION OF A NEW USER
router.post("/register", async (req, res) => {
    const { name, email, phone, work, password } = req.body;

    if (!name || !email || !phone || !work || !password)
        return res.status(422).json({ message: "Please fill all the fields" });

    try {
        const userExists = await User.findOne({
            $or: [{ email: email }, { phone: phone }],
        });

        if (userExists)
            return res
                .status(422)
                .json({ message: "User already exists", details: userExists });

        const user = new User({ name, email, phone, work, password });

        const userRegister = await user.save();
        if (userRegister)
            res.status(201).json({ message: "User registered successfully" });
        else
            res.status(500).json({
                message: "failed to register",
                error: err.message,
            });
        //* There is no need for if-else block to tell if an error occurred while registering user, becuase catch block is there.
    } catch (err) {
        console.log(err);
    }
});

//* SIGNING IN A USER
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(422)
                .json({ message: "Please fill all the fields" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (isMatch) {
                // Passwords match, user is authenticated
                const token = await userLogin.generateAuthToken();

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 2592000000), //30 days
                    httpOnly: true //because our localhost isn't secured yet
                });

                return res
                    .status(200)
                    .json({ message: "Sign in successfully", token: token });
            } else {
                // Passwords do not match
                return res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            // User with the provided email does not exist
            // * WE SHOULDN'T SEND WHICH CREDENTIAL IS WRONG, IT WILL BE EASY FOR HACKER TO HACK
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
