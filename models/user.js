var mongoose = require("mongoose");
var passportLocalMongo=require("passport-local-mongoose");
var userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password:String,
    DOB:String,
    profileimg:String
});
userSchema.plugin(passportLocalMongo);
module.exports = mongoose.model("User", userSchema);