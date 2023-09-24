const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

mongoose
    .connect(uri, {
        //* useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    })
    .then(() => {
        console.log("Connection established");
    })
    .catch((err) => {
        console.log(err);
    });
