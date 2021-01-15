//add new chat documents
class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    async addChat(message){
        const now = new Date();
        const chat ={
            message,
            username: this.username,
            room: this.room,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.chats.add(chat);
        return response;
    }
}
//setting up a real time listener to get new chats

//updating the username

//updating the room