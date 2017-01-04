var connection = require('../connection');

function Book() {
  this.get = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from book where author_id = ? order by series, year', [id],function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
}

module.exports = new Book();
