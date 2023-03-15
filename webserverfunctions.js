var express = require('express');
var app = express();
const port = process.env.PORT || 8080; //listens to port provided by webhost or 8080
const path = require("path"); //relative windows or MacOS


//Static

//General Styles
app.get("/Styles", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/Styles.css'));
});

//JSON Data for Guestbook table
app.get("/Data", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/data/guestbook.json'));
})

//Home page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Guestbook page
app.get('/guestbook', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/guestbook.html'));
});


//Contact us page
app.get('/newmessage', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/newmessage.html'));
});


//Contact us ajax page
app.get('/ajaxmessage', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/ajaxmessage.html'));
});

//General Error message
app.get('*', function (req, res) {
    res.send('Cant find the requested page', 404);
});


//General console.log
app.listen(port, function() {
    console.log('Service has started and is listening on port ' + port + '. ');
});