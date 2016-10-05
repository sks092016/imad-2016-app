var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/sidebg.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sidebg.png'));
<<<<<<< HEAD
});

app.get('/ui/tcillogo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tcillogo.png'));
=======
>>>>>>> 37dacf5f8072d853d908ba0e9741b7cefd58cb43
});

app.get('/ui/tcillogo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'tcillogo.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
