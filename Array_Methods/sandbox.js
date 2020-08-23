// filter method - non-destructive
// example 1
let scores = [10, 30, 15, 25, 50, 40, 5];
let filtered = scores.filter(score => {
  return score > 20;
});
console.log(filtered);
// example 2
const users = [
  {name: "Abe", premium: true},
  {name: "Jong", premium: false},
  {name: "Hae", premium: false},
  {name: "Choi", premium: true}
];
//filtered = users.filter(user => (user.premium === true));
filtered = users.filter(user => user.premium);
console.log(filtered);

// map method - non-destructive
// example 1
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
let sale = prices.map(price => price/2);
console.log(sale);
// example 2
let products = [
  {name: "gold star", price: 20},
  {name: "mushroom", price: 40},
  {name: "green shells", price: 30},
  {name: "banana skin", price: 10},
  {name: "red shells", price: 50}
];
sale = products.map(product => (product.price > 30 ? 
  {name: product.name, price: product.price/2} : product
));
console.log(sale);

// reduce method - arg1 = accumulator(running total), arg2 = current
// example 1
scores = [10, 20, 60, 40, 70, 90, 30];
let reduced = scores.reduce((acc, curr) => {
  if(curr > 50){
    acc++;
  }
  return acc;
}, 0); // initialized acc to 0, else it takes first element of array which would be 10.
console.log(reduced);
scores = [
  {name: "Mario", score: 50},
  {name: "Yoshi", score: 30},
  {name: "Mario", score: 70},
  {name: "Crystal", score: 60}
];
reduced = scores.reduce((acc, curr) => {
  if(curr.name === "Mario"){
    acc += curr.score;
  }
  return acc;
}, 0);
console.log(reduced); // => 120

// find method
scores = [10, 5, 0, 40, 60, 10, 20, 70];
let highScore = scores.find(score => {
  return score > 50;
});
console.log(highScore);

// sort method example 1
let names = ["Abe", "Jong", "Hae", "Choi"];
names.sort(); // sorts alphabetically
names.reverse(); // reverses
console.log(names);
// sort method example 2
scores = [10, 50, 20, 5, 35, 70, 45];
scores.sort((a,b) => b - a); // =>[70, 50, 45, 35, 20, 10, 5]
console.log(scores);
// sort method example 3
let players = [
  {name: "Abe", score: 20},
  {name: "Jong", score: 10},
  {name: "Hae", score: 50},
  {name: "Choi", score: 30}
];
// a = 1st element, b = 2nd element
/*
players.sort((a, b) => {
  if(a.score > b.score){
    return -1;
  }else if(b.score > a.score){
    return 1;
  }else{
    return 0;
  }
});
*/
players.sort((a,b) => b.score - a.score);
console.log(players);

// chaining array methods
products = [
  {name: "gold star", price: 30},
  {name: "mushroom", price: 10},
  {name: "green shells", price: 40},
  {name: "banana skin", price: 5},
  {name: "red shells", price: 50}
];
let chain = products
  .filter(product => product.price > 20)
  .map(product => (`The ${product.name} is ${product.price / 2} dollars`));
console.log(chain);