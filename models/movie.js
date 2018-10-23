var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
    title: String,
    Year: String,
    genre: String,
    imdb: String,
    imageUrl:String,
    avg_rating:Number,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

module.exports = mongoose.model("Movie", movieSchema);