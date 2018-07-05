var app = require('../app');

const port = 3300;
app.listen(port, () => {
    console.log('server is running on port' + port + '...');
});