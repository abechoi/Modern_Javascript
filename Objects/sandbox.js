/***********/
/* OBJECTS */
/***********/
  
// object literals
let user = {
  name: "Abe",
  age: 30,
  email: "me@abechoi.com",
  location: "Berlin",
  blogs: [
    {title: "Keto Diet Recipes", likes: 30},
    {title: "GameDevLog", likes: 50}    
  ],
  login: function(){
    console.log("The user logged in");
  },
  // shorthand notation
  logout(){
    console.log("The user logged out");
  },
  // shorthand notation
  logBlogs1(){
    //console.log(this); // => user object, this = local scope of this object
    this.blogs.map(blog => console.log(blog.title, blog.likes));
  },
  // Cannot use arrow function, this refers to global scope, instead of the local object
  logBlogs2: () => {
    console.log(this);
  }
}
// dot notation
console.log(user.age);
user.age = 31;
// bracket notation
console.log(user['age']);
user['age'] = 33;
console.log(user['age']);
// typeof object
console.log(typeof user);
// object method
user.login();
user.logout();
user.logBlogs1();
user.logBlogs2(); // => returns global this
// this = global context Window object
console.log(this);
// Math Object
console.log(Math);
console.log(Math.PI);
const area = 7.7;
console.log(Math.round(area)); // => 8, rounds up and down
console.log(Math.floor(area)); // => 7, rounds down
console.log(Math.ceil(area)); // => 8, rounds up
console.log(Math.trunc(area)); // => 7, removed decimal
// random numbers
const random = Math.random();
console.log(random); // => random number 0-1
console.log(Math.round(random * 100)); // => random number 1-100

// Primitives Values = Numbers, Strings, Booleans, Null, Undefined, Symbols
// Primitives are stored in Stacks. Stacks are faster because it stores data as key-value pairs
// Reference Values = All objects like object literals, arrays, functions, dates, etc
// References are stored in Heaps. Heaps are slower because they are use a pointer between the value and data
// Pointers can be shared with the same data, which leads to mutations

// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`score1: ${scoreOne} | score2: ${scoreTwo}`); // 50 50
scoreOne = 100;
console.log(`score1: ${scoreOne} | score2: ${scoreTwo}`); // 100 50
// reference values - mutation
const userOne = {name: "Abe", age: 30};
const userTwo = userOne;
console.log(userOne, userTwo); // Abe 30, Abe 30
userOne.name = "Choi";
console.log(userOne, userTwo); // Choi 30, Choi 30
