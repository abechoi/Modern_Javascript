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
const namesSet = new Set(namesArray);
console.log(namesSet);