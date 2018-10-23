var mongoose = require("mongoose");

// POST - title, content
var reviewSchema = new mongoose.Schema({
   author:String,
   title: String,
   content: String,
   rating:Number,
   type:String,
   date:String
});

module.exports = mongoose.model("Review", reviewSchema);