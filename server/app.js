const dotenv = require("dotenv");
const express = require("express");
const app = express();

//* You can just write "dotenv.config()" when the .env file is in the same directory.
// dotenv.config({ path: './.env' });
dotenv.config();


app.use(express.json());

const middleware = (req, res, next) => {
    console.log("middleware");
    next();
};

app.get("/", (req, res) => {
    res.send(`We are running`);
});

app.get("/about", middleware, (req, res) => {
    res.send(`We are running at about`);
});

app.get("/contact", (req, res) => {
    res.send(`We are running at contact`);
});

app.get("/signin", (req, res) => {
    res.send(`We are running at signin`);
});

app.get("/signup", (req, res) => {
    res.send(`We are running at signup`);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
