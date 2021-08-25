const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('Posts', PostSchema);