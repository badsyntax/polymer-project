var nconf = require('nconf');
var express = require('express');
var app = express();

nconf.argv().env().file({
  file: 'config/app.json'
});

app.use('/', express.static('web/'));

var server = app.listen(nconf.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});