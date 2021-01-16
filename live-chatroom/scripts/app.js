//jshint esversion:6
//dom queries
const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');

//add a new chat
newChat.addEventListener('submit', e=>{
        e.preventDefault();
        const message = newChat.message.value.trim();
        chatroom.addChat(message)
        .then(()=> newChat.reset())
        .catch(err => console.log(err));
});

//check localStorage for username
const username = localStorage.username ? localStorage.username : 'anon';

//class instances
const chatroom = new Chatroom('general', username);
const chatUi = new ChatUI(chatList);

//update username
newNameForm.addEventListener('submit', e=>{
        e.preventDefault();
        const newName = newNameForm.name.value.trim();
        chatroom.updateName(newName);
         newNameForm.reset();
         updateMssg.innerText = `Username update to "${newName}"`;
         setTimeout(()=>updateMssg.innerText = '', 3000);
});

//get the chats and render
chatroom.getChats(data => chatUi.render(data));