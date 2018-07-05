var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    response.send('THIS IS MULTIPLE QUERY MODULE.\n');
});

module.exports = router;