let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

let db = mongoose.connection;

db.on('connected', () => console.log(`MongoDB running on ${db.host}:${db.port}`));

module.exports = mongoose;