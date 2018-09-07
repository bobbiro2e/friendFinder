const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.get("/api/friends", function (req, res) {
    res.json();
});

app.post("/api/friends", function (req, res) {
    var newFriend = req.body
    friends.push(newFriend)
    //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
});
