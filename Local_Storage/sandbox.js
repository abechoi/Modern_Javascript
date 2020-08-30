// local storage - store data
localStorage.setItem("name", "Abe");
localStorage.setItem("age", "33");

// local storage - get data
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name, age);

// local storage - update data
localStorage.setItem("name", "Jong-Hae");
localStorage.age = 34;
name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);

// local storage - delete data
// localStorage.removeItem("name");
// localStorage.removeItem("age");

// local storage - delete all data
//localStorage.clear();

const todos = [
  {text: "Todo 1", author: "Abe"},
  {text: "Todo 2", author: "Choi"},
  {text: "Todo 3", author: "Jong-Hae"}
];

//console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));