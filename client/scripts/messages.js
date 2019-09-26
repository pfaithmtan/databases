var Messages = {
  createMessage: function(username, roomname, text) {
    var newMessage = new Object();
    newMessage.username = username;
    if (roomname !== 'No Room Selected') {
      newMessage.roomname = roomname;
    }
    newMessage.text = text;
    return newMessage;
  }
};