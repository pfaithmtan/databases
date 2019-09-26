var MessagesView = {

  $chats: $('#chats'),
  $button: $('#refresh'),

  initialize: function() {
    //console.log(this.$button);
    //MessagesView.$button.addEventListener('click', App.fetch(App.stopSpinner));
    MessagesView.$button.on('click', MessagesView.handleRefresh);
    //enable clicking on someone's name to friend them
    MessagesView.$chats.on('click', 'span', function() { MessagesView.addUser(this); });
    //MessagesView.$button.
  },

  renderMessage: function(message) {
    console.log('here');
    //console.log('rendermessage');
    console.log(message.username);
    if (App.friendsList.includes(message.username)) {
      console.log('rendering friend');
      MessagesView.$chats.append(MessageView.renderFriend(message));
    } else {
      MessagesView.$chats.append(MessageView.render(message));
    }
  },

  handleRefresh: function() {
    MessagesView.$chats.html('');
    //console.log('refreshj');
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  addUser: function(userName) {
    let elementClicked = userName.innerHTML;
    elementClicked = elementClicked.trim();
    if (!App.friendsList.includes(elementClicked)) {
      App.friendsList.push(elementClicked);
    } else {
      var removeFriend = App.friendsList.indexOf(elementClicked);
      App.friendsList.splice(removeFriend, 1);
    }
  }
};