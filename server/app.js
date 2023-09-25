const dotenv = require("dotenv");
const express = require("express");
const app = express();

//* You can just write "dotenv.config()" when the .env file is in the same directory.
// dotenv.config({ path: './.env' });
dotenv.config();

require('./db/db.js');
const User = require("./model/userSchema");

app.use(express.json());

//* The app.use() function is a method provided by Express to set up middleware functions or routes. 
app.use(require("./router/auth"));

const middleware = (req, res, next) => {
    console.log("middleware");
    next();
};

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
