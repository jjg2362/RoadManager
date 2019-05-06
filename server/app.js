const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, '../client', '/static')));

router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../client', 'index.html'));
})

app.use('/', router);

app.listen(3000, () => {
    console.log('Listen 3000');
});