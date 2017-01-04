var author = require('./models/author');
var book = require('./models/book');

module.exports = {
  configure: function(app) {
    app.get('/author/', function(req, res) {
      author.get(res);
    });

    app.post('/author/', function(req, res) {
      console.log(req.body);
      author.create(req.body, res);
    });

    app.put('/author/', function(req, res) {
      author.update(req.body, res);
    });

    app.delete('/author/:id/', function(req, res) {
      author.delete(req.params.id, res);
    });

    app.get('/book/:id/', function(req, res) {
      book.get(req.params.id, res);
    });
  }
};
