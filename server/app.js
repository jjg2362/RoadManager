const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');


router.get('/road/:id', (req, res) => {
    app.use('/road/static', express.static(path.join(__dirname, '../client', '/static')));
    res.sendfile(path.join(__dirname, '../client', `road${req.params.id}.html`));
})

router.get('/', (req, res) => {
    app.use('/static', express.static(path.join(__dirname, '../client', '/static')));
    res.sendfile(path.join(__dirname, '../client', 'index.html'));
})

app.use('/', router);

app.listen(3000, () => {
    console.log('Listen 3000');
});