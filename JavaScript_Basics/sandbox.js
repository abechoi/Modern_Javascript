/***********/
/* NUMBERS */
/***********/

// math operators + - * / ** %
let radius = 10;
const pi = 3.14;
let result = radius % 3; // => 1, 10/3 = 3 remainder 1
console.log(result);
result = pi * radius ** 2; // => 314, 3.14 * 10^2
console.log(result);
// order of operation
// B I D M A S - brackets | indices | division | multiplication | addition | subtraction
result = 5 * (10-3)**2; // => 245, 5 * 7^2 = 5 * 49
console.log(result);
// shorthand notiations
let likes = 10;
likes++; // => 11
likes--; // => 10
likes += 10; // => 20
likes -= 5; // => 15
likes *= 2; // => 30
likes /= 2; // => 15
console.log(likes);
// NaN - not a number
console.log(5 * "hello"); // => NaN
// number concatenation
result = 'the blog has ' + likes + ' likes';
console.log(result); // => the blog has 15 likes
// template/string literals
result = `the blog has ${likes} likes`;
console.log(result);
// html template
let html = `
  <h2>${likes}</h2>
  <p>${radius}</p>
  <span>${pi}</span>
`;
console.log(html);

/***********/
/* STRINGS */
/***********/

// strings
let str = "Hello World";
let email = "me@abechoi.com";
console.log(str, email);
// string concatenation
let firstName = "Brandon";
let lastName = "Sanderson";
let fullName = firstName + " " + lastName;
console.log(fullName);
// return first character
console.log(fullName[0]);
// string length
console.log(fullName.length);
// string methods
console.log(fullName.toUpperCase());
result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@'); // => 2
console.log(index);
index = email.lastIndexOf('m'); // => 13, last 'm' of the string
console.log(index);

result = email.slice(1,3); // => e@, arg1 = start index, arg2 = end index
console.log(result);
result = email.substr(1,3); // => e@a, arg1 = start index, arg2 = number of characters
console.log(result);
result = email.replace('m', 'w'); // => we@abechoi.com, replaces first m with w
console.log(result);

/************/
/* BOOLEANS */
/************/

// boolean methods
email = 'jonghae@abechoi.com';
console.log(email.includes('@')); // => true, since email contains @
console.log(email.includes('!')); // => false, since email does not contain !
// comparison operators
age = 25;
console.log(age == 25); // => true
console.log(age == 30); // => false
console.log(age != 30); // => true
console.log(age > 20); // => true
console.log(age < 20); // => false
console.log(age <= 25); // => true
let name = 'Abe';
console.log(name == 'Abe'); // => true
console.log(name == 'abe'); // => false
console.log(name > 'Crystal') // => false, A is less than C
console.log(name > 'abe') // => false, uppercase letters are less than lowercase letters
// loose comparison
console.log(25 == '25'); // => true, double-equal signs neglects type comparison
// strict comparison
console.log(25 === '25'); // => false, triple-equal signs include type comparison

/*************/
/* UNDEFINED */
/*************/

let noValue; // a variable that has not yet been defined
console.log(noValue); // => undefined

/********/
/* NULL */
/********/

noValue = null;
console.log(noValue); // => null

/***********/
/* OBJECTS */
/***********/

// arrays
let ninjas = ['Abe','Jong-Hae','Choi'];
console.log(ninjas);
// square-bracket notation
console.log(ninjas[1]); // => Jong-Hae
ninjas[1] = 'Hae-In';
console.log(ninjas[1]); // => Hae-In
let ages = [20,25,30,35];
console.log(ages[2]); // => 30
console.log(ninjas.length); // => 3
// array methods
result = ninjas.join(',');
console.log(result); // => "Abe,Hae-In,Choi"
result = ninjas.indexOf('Choi');
console.log(result); // => 2
result = ninjas.concat(ages);
console.log(result); // => ['Abe','Jong-Hae','Choi',20,25,30,35]
result = ninjas.push('Jong-Hae');
console.log(result); // => 4, push method is a destructive method, which returns length
result = ninjas.pop();
console.log(result); // => Jong-Hae, returns last element

/***********/
/* SYMBOLS */
/***********/

// Will go over later in the course...

/********************/
/* TYPE CONVERSIONS */
/********************/
score = '100';
score = Number(score); // converts string to number
console.log(score + 1); // => 101
console.log(typeof score) // => number, it was a string
result = Number('Hello');
console.log(result); // => NaN
result = String(50);
console.log(typeof result); // => string
// truthy numbers = positive/negative numbers and strings, falsy number = 0, empty strings
result = Boolean(100);
console.log(result, typeof result); // => true boolean, positive numbers are truthy numbers
result = Boolean('0');
console.log(result, typeof result); // => true boolean
result = Boolean('');
console.log(result, typeof result); // => false boolean, empty strings are falsy