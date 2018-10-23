var express=require("express");
var User = require("./models/user");
var Book = require("./models/book");
var mongoose = require("mongoose");
var bodyParser=require("body-parser");
var app=express();
var passport = require("passport");
var localStartegy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
//mongoose.connect("mongodb://localhost/bookreview");


app.get("/books",function(req,res){
    res.render("index");
});

app.get("/books/new",function(req,res){
    res.render("new");
});

app.post("/books",function(req,res){
    Book.create(req.body.info,function(err,bookCreated){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("index");
            console.log("New book created");
        }
    });
});

app.get("/books/:id",function(req,res){
    Book.findById(req.params.id,function(err,foundBook){
        if(err){
            console.log(err);
        }else{
            res.render("show",{book:foundBook});
        }
    });
});

app.get("/books/:id/edit",function(req,res){
    Book.findById(req.params.id,function(err,foundBook){
        if(err){
            console.log(err);
        } else{
            res.render("edit",{nook:foundBook});
        }
    });
});

/*app.put("/books/:id",function(req,res){
    Book.findByIdAndUpdate(req.params.id,req.body.info,function(err,updatedBook){
        if(err){
            console.log(err);
        } else{
            res.redirect("/books");
            console.log("Book successfully Updated");
        }
    });
});

app.delete("/books/:id",function(req,res){
    Book.findByIdAndRemove(req.params.id,function(err,deleteBook){
        if(err){
            console.log(err);
        }     
        else{
            res.redirect("/books");
            console.log("Book successfully deleted");
        }
    });
});
*/
// Book.findOne({isbn:parsedData.items[0].volumeInfo.industryIdentifiers[0].identifier},function(err,foundBook){
//     if(err)
//     {
//         var book = new Book({
//             title:parsedData.items[0].volumeInfo.title,
//             author:parsedData.items[0].volumeInfo.authors[0],
//             publishedDate:parsedData.items[0].volumeInfo.publishedDate,
//             genre:parsedData.items[0].volumeInfo.categories[0],
//             isbn:parsedData.items[0].volumeInfo.industryIdentifiers[0].identifier,
//             imageUrl:parsedData.items[0].volumeInfo.imageLinks.thumbnail,
//             avg_rating:parsedData.items[0].volumeInfo.averageRating,
//             reviews:[]
//         });
//         book.reviews.push(newrev);
//         Book.create(book,function(err,newb){
//             if(err)
//             console.log(err);
//             else
//             console.log(newb);
//         });
//     }
//     else{
//         foundBook.reviews.push(newrev);
//         Book.findByIdAndUpdate(foundBook.id,foundBook,function(err,fin){
//             if(err)
//             console.log(err);
//             else
//             console.log(fin);
//         });
//     }
// });
//     //then, redirect to the index
//     res.redirect("/main");