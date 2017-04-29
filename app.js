var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index);
app.get('/hello', require('./routes').hello);

app.listen(3000, function () {
  console.log('Express app listening on port 3000!')
});
