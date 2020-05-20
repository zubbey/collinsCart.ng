const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.use('/', router);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.port || 3000);