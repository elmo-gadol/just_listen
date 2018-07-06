const url = require('url');
const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    let query = url.parse(req.url, true).query;
    request(query.song, (err, requestRes, html) => {
        if (err) {
            return res.json({
                "input": query.song,
                "message": "음악을 찾을 수 없습니다!"
            });
        }

        // 음악 정보 찾는걸 별도 모듈로 만들어서 쓸 필요 있음
        // 여러개 곡을 찾으려고 하는경우 ... request의 response는 비동기인데 얘를 어떻게 동기로 잡아야하나 (ㅠㅠ) 나 이거 공부해야할듯,,
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