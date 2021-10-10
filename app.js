var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var MenuRouter = require('./routes/Menu');
var Create_MRouter = require('./routes/Create_M');
var Search_MRouter = require('./routes/Search_M');
var Results_SRouter = require('./routes/Results_S');
var Data_MRouter = require('./routes/Data_M');
var Management_URouter = require('./routes/Management_U');
var Data_URouter = require('./routes/Data_U');

var app = express();

app.use(session({ secret : 'MySecret' }) )

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Menu', MenuRouter);
app.use('/Create_M', Create_MRouter);
app.use('/Search_M', Search_MRouter);
app.use('/Results_S', Results_SRouter);
app.use('/Data_M', Data_MRouter);
app.use('/Management_U',Management_URouter);
app.use('/Data_U',Data_URouter);


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
