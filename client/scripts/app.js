var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomsList: [],
  currentRoom: 'No Room Selected',
  friendsList: [],

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      App.displayAllMessages(data);
      callback();
    });
  },

  displayAllMessages: function(data) {
    //console.log('display');
    //MessagesView.$messages.empty();
    console.log(data);
    data.forEach(function(message) {
      console.log(message);
      MessagesView.renderMessage(message);
    });
  },

  post: function(input) {
    if (input) {
      console.log(input);
      var newMessage = Messages.createMessage(App.username, input, '');
      Parse.create(newMessage);
      console.log('post');
    } else {
      var inputForm = document.getElementById('send');
      var newMessage = Messages.createMessage(App.username, App.currentRoom, inputForm.elements[0].value);
      Parse.create(newMessage);
      //console.log('post');
    }
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
    RoomsView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
    RoomsView.setStatus(false);
  }
};
