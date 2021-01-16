//jshint esversion:6
//dom queries
const chatList = document.querySelector('.chat-list');


//class instances
const chatroom = new Chatroom('music', 'opa');
const chatUi = new ChatUI(chatList);

//get the chats and render
chatroom.getChats(data => chatUi.render(data));