var express = require('express');
var app = express();
var routes = require('./routes');
var errorHandler = require('errorhandler');
var logger = require('morgan')

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(logger('dev'));

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/', routes.index);

app.listen(3000, function () {
  console.log('Express app listening on port 3000!')
});
