var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    name: String,
    description: String
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;

