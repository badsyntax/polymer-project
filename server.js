var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var nconf = require('nconf');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express3-handlebars');

var routes = require('./app/routes/index');
var users = require('./app/routes/users');

var app = express();

// load config
nconf.argv().env().file({
  file: './app/config/app.json'
});

// view engine setup
var viewsDir = path.join(__dirname, 'app', 'views');
app.set('views', viewsDir);
app.engine('hbs', exphbs({
  layoutsDir: viewsDir,
  partialsDir: viewsDir,
  extname: '.hbs',
  defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app', 'public')));

// set locals
app.use(function(req, res, next) {
  // res.locals.version = 1;
  next();
});

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.locals.pretty = true;
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(nconf.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
