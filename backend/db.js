const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&w=true"

const connectToMongo = () => {
    // mongoose.connect(mongoURI), () => {
    //     console.log('Connect to mongo successfully');
    // })
    mongoose.connect(mongoURI)
        .then(() =>
            console.log("Connect to mongo successfully "))
        .catch((e) => console.log(e.message))
}

module.exports = connectToMongo;