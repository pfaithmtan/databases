var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((data) => {
        res.json(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.json, () => {
        res.send('request ended');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) {
      models.users.post(req.json, () => {
        res.send('request ended');
      });
    }
  }
};

