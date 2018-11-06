var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	title: String,
	author: String, 
	published_date: { type: Date, default: Date.now }
});

var Book = mongoose.model('book', bookSchema);

var book = new Book({
    name: "NodeJS Tutorial",
    author: "velopert"
});
book.save(function(err, book){
    if(err) return console.error(err);
    console.dir(book);
});


module.exports = mongoose.model('book', bookSchema);

