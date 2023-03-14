var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('This is our main or root page.');
});

app.get('/guestbook', function (req, res) {
    res.send('This is our guestbook page.');
});

app.get('/newmessage', function (req, res) {
    res.send('This is our newmessage page.');
});

app.get('/ajaxmessage', function (req, res) {
    res.send('This is our ajaxmessage page.');
});

app.get('*', function (req, res) {
    res.send('Cant find the requested page', 404);
});

app.listen(8080, function() {
    console.log('App listening on port 8080!');
});