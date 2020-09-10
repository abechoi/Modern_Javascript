// dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMssg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");
// add new chat
newChatForm.addEventListener("submit", e => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});
// update username
newNameForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = newNameForm.name.value.trim();
  chatroom.updateName(name);
  newNameForm.reset();
  updateMssg.innerText = `UPDATE: username changed to ${name}`;
  setTimeout(() => updateMssg.innerHTML = "", 3000);
});
// update the chatroom
rooms.addEventListener("click", e => {
  if(e.target.tagName === "BUTTON"){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats(chat => chatUI.render(chat));
  }
});
// check local storage for username
const username = localStorage.username ? localStorage.username : "anon";
// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);
// get and render chats
chatroom.getChats(data => chatUI.render(data));