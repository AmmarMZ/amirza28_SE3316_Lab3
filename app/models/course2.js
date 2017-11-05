var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var course2Schema   = new Schema({
    name: String,
    date: String
});

module.exports = mongoose.model('course2', course2Schema);