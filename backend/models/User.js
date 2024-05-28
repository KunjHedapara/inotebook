const mongoose = require('mongoose');
// const { isEmail } = require('validator');
// const bcrypt = require('bcryptjs');
const { Schema } = mongoose;
 
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
        //     validator: isEmail,
        //     message: 'Please enter a valid email'
        // }
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

// custom error heandling

// UserSchema.post('save', function (error, doc, next) {
//     if (error.name === 'MongoServerError' && error.code === 11000) {
//         next(new Error('Email already exists'));
//     } else {
//         next(error);
//     }
// });

const User = mongoose.model('user', UserSchema);
User.createIndexes
module.exports = User;