import pkg from 'http-errors';
const { createError } = pkg;

import express from 'express'
import path from  'path'
import cookieParser from 'cookie-parser'

import morgan from 'morgan';
const { logger } = morgan;

// const indexRouter = await (import('./routes/index.js'))
// const usersRouter = await (import('./routes/users.js'))
const corredoresRouter = await (await (import('./routes/corredores.js'))).default

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/corredores', corredoresRouter);
app.use('/checkpoints', checkpointsRouter);

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

app.listen(4000)

export default app
