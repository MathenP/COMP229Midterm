let mongoose = require('mongoose');

// create a model class
let book = mongoose.Schema({
    title: String,
    description: String,
    price: String,
    author: String,
    genre: String
},
{
  collection: "mid_book"
});

module.exports = mongoose.model('Book', book);
