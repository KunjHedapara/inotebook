const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = () => {
    mongoose.connect(mongoURI),
        console.log('Connected to mongo successfully');

    //    mongoose.connect(mongoURI)
    //        .then(() =>
    //            console.log("Connect to mongo successfully "))
    //       .catch((e) => console.log(e.message))
}

module.exports = connectToMongo;

// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/";

// const connectToMongo = () => {
// mongoose.connect(mongoURI);
// console.log("connected to mongo");
// };

// module.exports = connectToMongo;