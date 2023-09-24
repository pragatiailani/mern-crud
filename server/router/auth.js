const express = require("express");
const router = express.Router();

require("../db/db");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
    res.send(`We are running from router`);
});

module.exports = router;
