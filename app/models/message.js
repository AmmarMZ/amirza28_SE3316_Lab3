var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var messageSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('message', messageSchema);