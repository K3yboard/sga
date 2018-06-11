const express = require('express');
const path = require('path');
const app = express();
// const bodyParser = require('body-parser');
const port = process.env.PORT || '8080';

app.set('port', port);
app.use(express.static(__dirname + '/dist/sga'));

app.get('/[^\.]+$', function(req, res) {
    res.set('Content-Type', 'text/html')
        .sendFile(path.join(__dirname, '/dist/sga/index.html'))
});

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost: ' + app.get('port'));
});
