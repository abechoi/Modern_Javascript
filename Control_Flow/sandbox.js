/*********/
/* LOOPS */
/*********/

// for loop example 1
for(let i = 0; i < 5; ++i){
  console.log(`for loop: ${i}`);
}
// for loop example 2
const names = ['Abe', 'Jong-Hae', 'Choi'];
for(let i = 0; i < names.length; ++i){
  console.log(`names[${i}] = ${names[i]}`);
  let html = `<div>names[${i}] = ${names[i]}</div>`;
  console.log(html);
}
// while loop exmaple 1
let i = 0;
while(i < 5){
  console.log(`while loop: ${i}`);
  ++i;
}
// while loop example 2
i = 0;
while(i < names.length){
  console.log(`names[${i}] = ${names[i]}`);
  ++i;
}
// do-while loop example 1
i = 0;
do{
  console.log(`do-while loop: ${i}`);
  ++i;
}while(i < 5);

/****************/
/* CONDITIONALS */
/****************/

// if statements
let age = 20;
if(age > 20){
  console.log('You are over 20 years old'); // => nothing, if statement is false
}
if(names.length > 2){
  console.log("That's a lot of names..."); // => prints, since the if statement is true
}
// if-else statement
let password = 'pass';
if(password.length >= 8){
  console.log("Strong password");
}else{
  console.log("Weak password");
}
// logical operators - OR || and AND &&
password = '1234%';
if(password.length >= 12 && password.includes('%' || '@' && '!')){
  console.log("Strong password");
}else if(password.length >= 8 || password.length >= 5 && password.includes('%' || '@' && '!')){
  console.log("Average password");
}else{
  console.log("Weak password");
}
// logical operators - NOT !
console.log(!true); // => false
console.log(!false); // => true
// break and continue
const scores = [50,25,0,30,100,20,10];
for(let i = 0; i < scores.length; ++i){
  // if scores[i] = 0, skips the whole iteration
  if(scores[i] === 0){
    continue;
  }
  console.log(`score: ${scores[i]}`);
  // if scores[i] = 100, for loop is broken
  if(scores[i] === 100){
    console.log('SCORE: 100!');
    break;
  }
}
//switch statement
const grade = 'D';
switch(grade){
  case 'A':
    console.log(`grade = ${grade}`);
    break;
  case 'B':
    console.log(`grade = ${grade}`);
    break;
  case 'C':
    console.log(`grade = ${grade}`);
    break;
  case 'D':
    console.log(`grade = ${grade}`);
    break;
  case 'F':
    console.log(`grade = ${grade}`);
    break;
  default:
    console.log('Invalid grade');  
}
// variables & block scope
// let and const has dynamic scopes, var does not
const scope = 30; // defines variable on global scope
if(true){
  const scope = 40; // redefines variable on local scope
  console.log(scope);
  if(true){
    const scope = 50; // redefines variable on local scope
    console.log(scope);
  }
}
console.log(scope);