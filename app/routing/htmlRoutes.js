const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"))
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});