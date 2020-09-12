// rest parameter
const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num*2);
}
const result = double(1,2,3,4,5);
console.log(result);

// spread syntax (arrays)
const people = ["shaun", "ryu", "crystal"];
const members = ["mario", "chun-li", ...people];
console.log(...people);
console.log(members);

// spread syntax (objects)
const person = { name: "abe", age: 33, job: "ninja"};
const personClone = {...person, location: "Irvine"};
console.log(personClone);

// sets
const namesArray = ["ryu", "chun-li", "ryu", "shuan"];
console.log(namesArray);
// const namesSet = new Set(namesArray);
// console.log(namesSet);
// const uniqueNames = [...namesSet];
// console.log(uniqueNames);
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);
const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.delete(25);
console.log(ages, ages.size);
console.log(ages.has(30)); // => true, 30 is in the set
ages.clear(); // => {}, deletes all

const ninjas = new Set([
  {name: "Abe", age: 33},
  {name: "Jong", age: 34},
  {name: "Choi", age: 35}
]);

ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age);
});

// symbols, always unique from one another
const symbolOne = Symbol("a generic name");
const symbolTwo = Symbol("a generic name");
console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne === symbolTwo);

const ninja = {};
ninja.age = 30;
ninja["belt"] = "orange";
ninja["belt"] = "black";
console.log(ninja);