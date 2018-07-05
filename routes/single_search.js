var url = require('url');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    let query = url.parse(request.url, true).query;
    let response_test = {
        "message": "THIS IS SINGLE QUERY MODULE.",
        "input": query.song
    }
    return response.json(response_test);
});

module.exports = router;