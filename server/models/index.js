var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT text,rooms.roomname,users.username FROM ((messages INNER JOIN rooms ON messages.roomID = rooms.id) INNER JOIN users ON messages.userID = users.id); ';
      var queryArgs = [];

      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      console.log(message);
      var queryString = 'INSERT INTO messages(text,roomID,userID) VALUES(?,?,?)';
      var queryArgs = [message.text, 1, 1];

      db.query(queryString, queryArgs, function(err) {
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
        var queryString = 'INSERT INTO users(username) VALUES(?)';
        var queryArgs = [user.username];
        db.query(queryString, queryArgs, function(err) {
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

