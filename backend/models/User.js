const UserSchema = new Schema({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    },
    date: {
        type: string,
        required: date.now
    },
});

modules.exports = mongoose.module('user', UserSchema)