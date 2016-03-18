var express       = require('express');
var bodyParser    = require('body-parser');
var app           = express();
var mongo         = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

require('./routes')(app,mongo);

module.exports = app;
