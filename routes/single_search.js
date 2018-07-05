const url = require('url');
const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    let query = url.parse(req.url, true).query;
    request(query.song, function (err, requestRes, html) {
        if (err) {
            return res.json({
                "input": query.song,
                "message": "음악을 찾을 수 없습니다!"
            });
        }

        let $ = cheerio.load(html);
        let title = $('meta[property="og:title"]').attr('content');
    
        return res.json({
            "message": "THIS IS SINGLE QUERY MODULE.",
            "input": query.song,
            "result": title
        });
    });
});


module.exports = router;