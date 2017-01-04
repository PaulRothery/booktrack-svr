var connection = require('../connection');

function Todo() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      console.log("selecting all authors");

      con.query('select * from author', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(author, res) {
    connection.acquire(function(err, con) {
      con.query('insert into author set ?', author, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Author creation failed'});
        } else {
          res.send({status: 0, message: 'Author created successfully'});
        }
      });
    });
  };

  this.update = function(author, res) {
    connection.acquire(function(err, con) {
      console.log("author_update " + author + " " + author.author_id);
      con.query('update author set ? where author_id = ?', [author, author.author_id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Author update failed'});
        } else {
          res.send({status: 0, message: 'Author updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from author where author_id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}

module.exports = new Todo();
