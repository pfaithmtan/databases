var models = require('../models');
var headers = require('cors');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((data) => {
        //res.writeHead(200,headers);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body, () => {
        res.setHeader('Access-Control-Allow-Origin', '*');
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

