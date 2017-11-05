var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var messageSchema   = new Schema({
    name: String,
    date: String
});

module.exports = mongoose.model('message', messageSchema);