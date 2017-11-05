var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var course1Schema   = new Schema({
    name: String,
    date: String
});

module.exports = mongoose.model('course1', course1Schema);