//jshint esversion:8
//add new chat documents
class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    async addChat(message){
        const now = new Date();
        //format a chat object
        const chat ={
            message,
            username: this.username,
            room: this.room,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        };
        //save chat document
        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback){
        this.chats
        .where('room', '==', this.room)
        .onSnapshot(onSnapshot =>{
            onSnapshot.docChanges().forEach(change =>{
                if(change.type === 'added'){
                    //update the ui
                    callback(change.doc.data());
                }
            });
        });
    }
}

const chatroom = new Chatroom('general', 'el');

    chatroom.getChats((data) =>{
        console.log(data);
    });

//setting up a real time listener to get new chats

//updating the username

//updating the room