const bodyParser = require('body-parser');
const express = require('express');

const index = require('./routes/index');
const multi = require('./routes/multi_search');
const single = require('./routes/single_search');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/single', single);
app.use('/multi', multi)

// catch 404
app.use((request, response, next) => {
    let error = new Error('NOT FOUND');
    error.status = 404;
    next(error);
});

module.exports = app;