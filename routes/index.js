exports.index = function(req, res){
  res.render('index', { name: 'Stranger', title: 'WIP' });
};

exports.hello = function(req, res) {
  res.send('Hello World!')
};
