var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT text,rooms.roomname,users.username FROM ((messages INNER JOIN rooms ON messages.roomID = rooms.id) INNER JOIN users ON messages.userID = users.id); ';
      var queryArgs = [];

      dbConnection.query(queryString, queryArgs, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = 'INSERT INTO messages VALUES(?,?,?,?)';
      var queryArgs = [1, message.message, 1, 1];
      // TODO - The exact query string and query args to use
      // here depend on the schema you design, so I'll leave
      // them up to you. */

      dbConnection.query(queryString, queryArgs, function(err) {
        if (err) {
          throw err;
        } else {
          callback();
        }
      }); // a function which can be used to insert a message into the database
    },

    users: {
      // Ditto as above.
      get: function () {},
      post: function (user, callback) {
        var queryString = 'INSERT INTO users VALUES(?,?)';
        var queryArgs = [1, user.username];
        dbConnection.query(queryString, queryArgs, function(err) {
          if (err) {
            throw err;
          } else {
            callback();
          }
        });
      }
    }
  }
};

