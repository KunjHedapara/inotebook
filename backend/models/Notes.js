const NotesSchema = new Schema({
    title: {
        type: string,
        required: true,
    },
    description: {
        type: string,
        required: true,
    },
    tag: {
        type: string,
        default:"General"
    },
    date: {
        type: string,
        required: date.now
    },
});

modules.exports = mongoose.module('notes', NotesSchema)