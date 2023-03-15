var express = require('express');
var app = express();
const port = process.env.PORT || 8080; //listens to port provided by webhost or 8080
const path = require("path"); //relative windows or MacOS

app.get("/Styles", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/Styles.css'));
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    
});

app.get('/guestbook', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/guestbook.html'));
});


app.get('/newmessage', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/newmessage.html'));
});

app.get('/ajaxmessage', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/ajaxmessage.html'));
});

app.get('*', function (req, res) {
    res.send('Cant find the requested page', 404);
});

app.listen(port, function() {
    console.log('App listening...');
});