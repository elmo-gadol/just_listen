const express = require('express');
const router = express.Router();
const metafetch = require('metafetch');

router.get('/', (request, response, next) => {

    metafetch.fetch('https://itunes.apple.com/us/album/ride-or-die-feat-foster-the-people/1354635121?i=1354635697', (err,meta)=> {
        console.log('title: ', meta.title);
        console.log('description: ', meta.description);
        console.log('type: ', meta.type);
        console.log('url: ', meta.url);
        console.log('ampURL: ', meta.ampURL);
        console.log('siteName: ', meta.siteName);
        console.log('charset: ', meta.charset);
        console.log('image: ', meta.image);
        console.log('meta: ', meta.meta);
        console.log('images: ', meta.images);
        console.log('links: ', meta.links);
        console.log('headers: ', meta.headers);
        console.log('language: ', meta.language);
    });
});


module.exports = router;