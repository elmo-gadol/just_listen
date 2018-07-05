var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    var song = request.body.song;
    var songs = song.split(',');
    let response_test = {
        "message": "THIS IS MULTIPLE QUERY MODULE.",
        "song": songs
    }
    return response.json(response_test);
});

module.exports = router;