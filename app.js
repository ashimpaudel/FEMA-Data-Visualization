var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var Router2012 = require('./routes/2012');
var Router2013 = require('./routes/2013');
var Router2014 = require('./routes/2014');
var Router2015 = require('./routes/2015');
var Router2016 = require('./routes/2016');
var Router2017 = require('./routes/2017');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/2012', Router2012);
app.use('/2013', Router2013);
app.use('/2014', Router2014);
app.use('/2015', Router2015);
app.use('/2016', Router2016);
app.use('/2017', Router2017);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
