const express = require('express');
const router = express.Router();

router.get('/', function(request, response, next) {
    let song = request.body.song;
    let songs = song.split(',');
    let response_test = {
        "message": "THIS IS MULTIPLE QUERY MODULE.",
        "song": songs
    }
    return response.json(response_test);
});

module.exports = router;