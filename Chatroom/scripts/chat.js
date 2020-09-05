// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room
class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
  }
  async addChat(message){
    // format chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save chat documents
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback){
    this.chats
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === "added"){
            // update UI
            callback(change.doc.data());
          }
        })
      });
  }
}

const chatroom = new Chatroom("gaming", "shuan");
console.log(chatroom);

chatroom.addChat("hello everyone")
  .then(() => console.log("chat added"))
  .catch(err => console.log(err));

chatroom.getChats(data => {
  console.log(data);
});