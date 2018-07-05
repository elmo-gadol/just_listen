const express = require('express');
const router = express.Router();

router.get('/', function(request, response, next) {
    response.send('@JUST LISTEN@\n');
});

module.exports = router;