let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postModel = new Schema({
    lon: String,
    lat: String,
    sentence: String,
    emotion: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postModel);