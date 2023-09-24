const express = require("express");
const router = express.Router();

require("../db/db");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send(`We are running from router`);
});

//* This is promises approach
router.post("/register", (req, res) => {
    console.log(req.body);
    const { name, email, phone, work, password } = req.body;

    if (!name || !email || !phone || !work || !password) {
        return res.status(422).json({ message: "Please fill all the fields" });
    }

    // User.findOne({ email: email, phone: phone })
    User.findOne({ email: email})
        .then((userExists) => {
            if (userExists) {
                return res.status(422).json({ message: "User already exists" });
            }
            //* usually you write ({MongoSchemaNameField: inputName, MongoSchemaEmailField: inputEmail}) but we have both the fields same in this case so we are not gonna write like that.
            //* if key and value names are same then you can write just once.
            const user = new User({ name, email, phone, work, password });

            user.save()
                .then(() => {
                    res.status(201).json({
                        message: "User registered successfully",
                    });
                })
                .catch((err) =>
                    res.status(500).json({
                        message: "failed to register",
                        error: err.message,
                    })
                );
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
