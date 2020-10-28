var express = require('express');
const app = express()

app.use(express.static('public'))

var server = app.listen(3000, function() {
    console.log('Listening on port ' + server.address().port);
});