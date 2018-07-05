var bodyParser = require('body-parser');
var express = require('express');

var index = require('./routes/index');
var multi = require('./routes/multi_search');
var single = require('./routes/single_search');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/single', single);
app.use('/multi', multi)

// catch 404
app.use(function (request, response, next) {
    var error = new Error('NOT FOUND');
    error.status = 404;
    next(error);
});

module.exports = app;