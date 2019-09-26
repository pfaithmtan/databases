var MessageView = {

  render: _.template(`
      <div class="chat">
        <span class="<%- username %>" style="font-weight: bold;"> <%- username %> </span>
        <div><%- text %></div>
      </div>
    `),

  renderFriend: _.template(`
    <div class="chat"style="background-color:lightblue">
      <span class="<%- username %>" style="font-weight: bold;"> <%- username %> </span>
      <div><%- text %></div>
    </div>
  `)
};