exports.index = function (req, res) {
  var AmazonWishList = require('amazon-wish-list');
  var awl = new AmazonWishList.default('com');
  var listId = 'CP9LH0E2NMUD'

  var awlRequest = awl.getById(listId);

  awlRequest.then(function(list) {
    var initialState =  list.items;
    res.render('index', { name: 'Stranger', title: 'Lazy Amazon Wishlist', data: initialState });
  })
}
