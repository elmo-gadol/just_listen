const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('@JUST LISTEN@\n');
});

module.exports = router;