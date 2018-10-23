var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: String,
    genre: String,
    isbn: Number,
    imageUrl:String,
    avg_rating:Number,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

module.exports = mongoose.model("Book", bookSchema);