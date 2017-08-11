var express = require('express');
var app = express();
var path = require('path');

// Require static CSS, JavaScript, and image files
app.use('/public', express.static(__dirname + '/public'));

// Require Bower Components
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
