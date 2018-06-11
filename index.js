const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');
const port = process.env.PORT || '8080';

app.set('port', port);
app.use(express.static(__dirname + '/dist'));

app.get('/[^\.]+$', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
});

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost: ' + app.get('port'));
});
