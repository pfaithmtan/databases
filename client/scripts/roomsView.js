var RoomsView = {

  $form: $('#rooms form'),
  //$text: $('#rooms #form ')
  $select: $('#rooms select'),

  format: _.template(`
  <option value="<%- roomname %>"><%- roomname %></option>
`),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.filterRoom);
    RoomsView.$form.on('submit', RoomsView.addRoom);
  },

  render: function(message) {
    //console.log('room render');
    //console.log(this.$select);
    RoomsView.$select.append(RoomsView.format(message));
  },

  filterRoom: function() {
    //get current selected room
    var newRoom = RoomsView.$select.val();
    App.currentRoom = RoomsView.$select.val();
    MessagesView.$chats.html('');
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  addRoom: function() {
    // Stop the browser from submitting the form
    if (RoomsView.$form[0][0].value !== null) {
      event.preventDefault();
      console.log(RoomsView.$form[0][0].value);
      App.post(RoomsView.$form[0][0].value);
      console.log('click!');
    }
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    RoomsView.$form.find('input[type=submit]').attr('disabled', status);
  }


};
