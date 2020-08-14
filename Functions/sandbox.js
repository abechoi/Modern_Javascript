/*************/
/* FUNCTIONS */
/*************/

// function declaration
function greet(){
  console.log("Hello!");
}
// function expression
const speak = (name = '[name]') => {
  console.log(`My name is ${name}!`);
}
// function call/invocation
greet();
speak();
hoist();
// hoisted function declaration
function hoist(){
  console.log("Hoisted function declaration!");
}

const calcArea1 = function(radius){
  return 3.14 * radius**2;
}
const area1 = calcArea1(5);
console.log(area1);
// arrow function example 1
const calcArea2 = radius => 3.14 * radius**2;
const area2 = calcArea2(5);
console.log(area2);
// arrow function example 2
const greet2 = () => "Hello World";
console.log(greet2());
// arrow function example 3
const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; ++i){
    total += products[i] + products[i]*tax;
  }
  return total;
}
console.log(bill([10,15,30], 0.2));
// methods utilize dot notation
let name = "abe";
console.log( name[0].toUpperCase() + name.slice(1) ); // => Abe
// callback function expression
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
}
// callback function invocation
myFunc(function(value){
  console.log(value);
});
// arrow callback functon invocation
myFunc(value => console.log(value));
// foreach - arg1 = data, arg2 = index
let people = ['Abe', 'Jong', 'Hae', 'Choi', 'Abraham'];
people.forEach(function(person){
  console.log(person);
});
const logPerson = (person, index) => {
  console.log(`${index}: ${person}`);
}
people.forEach(logPerson);
// get a reference to the ul
const ul = document.querySelector('.people');
// people = ['Abe', 'Jong', 'Hae', 'Choi', 'Abraham'];
let html = ``;
people.forEach(person => {
  // create html template per person
  html += `<li style="color: purple">${person}</li>`
});
// document.querySelector('.people').innerHTML = html;
ul.innerHTML = html;