//jshint esversion:8

class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
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
        this.unsub = this.chats
        .where('room', '==' , this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type === 'added'){
                    //update the ui
                    callback(change.doc.data());
                }
            });
        });
    }

    updateName(username){
        this.username = username;
    }

    updateRoom(room){
        //change the room on the property
        this.room = room;
        console.log('room updated');
        if(this.unsub){
            //unsubscribe from changes from the current document based on the the old room
            this.unsub();
        }
    }
}




//emulate 3 second change room:
// setTimeout(()=>{
//     //change room proprty of chatroom and unsubscribe from old one
//     chatroom.updateRoom('general');
//     chatroom.updateName('el');
//     //set up a new listener and because the room property of chatroom has been updated, this time its listening to 'general'
//     chatroom.getChats((data)=>{
//         console.log(data);
//     });
//     //chatroom.addChat('hello');

// }, 3000);