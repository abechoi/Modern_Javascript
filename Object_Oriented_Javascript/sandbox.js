class User{
  constructor(username, email){
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} online`);
    return this;
  }
  logout(){
    console.log(`${this.username} offline`);
    return this;
  }
  increaseScore(){
    this.score++;
    console.log(`${this.username}: ${this.score} points`);
    return this;
  }
}
class Admin extends User{
  constructor(username, email, title){
    super(username, email);
    this.title = title;
  }
  deleteUser(user){
    users = users.filter(u => u.username !== user.username);
  }
}
// the "new" keyword
// 1. Creates an empty object {}
// 2. Binds the value of "this" to the empty object
// 3. Calls the constructor function to build the object
const userOne = new User("Abe", "abe@abechoi.com");
const userTwo = new User("Choi", "choi@abechoi.com");

console.log(userOne, userTwo);
userOne.login().increaseScore().increaseScore().increaseScore();
userTwo.logout();

const userThree = new Admin("Jong", "jong@abechoi.com", "Ninja");
console.log(userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
console.log(userThree);

//! OLD CLASS
function oldUser(username, email){
  this.username = username;
  this.email = email;
  this.login = function(){
    console.log(`${this.username} has logged in`);
  }
}
const oldUserOne = new oldUser("mario", "mario@ninja.com");
oldUserOne.login();