var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/about.html'));
});

app.get('/testimonials', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/testimonial.html'));
});

app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/gallery.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/contact.html'));
});
app.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/services.html'));
});

app.listen(3001, function() {
    console.log('Listening on port 3001...');
});