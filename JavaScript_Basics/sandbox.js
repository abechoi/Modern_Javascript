/**********/
/* NUMBER */
/**********/

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

let likes = 10;
likes = likes + 1;
console.log(likes);

/**********/
/* STRING */
/**********/

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

/* BOOLEAN */
let bool = true;
console.log(bool);

/* UNDEFINED */
let noValue; // a variable that has not yet been defined
console.log(noValue); // => undefined

/* NULL */
noValue = null;
console.log(noValue); // => null

/* OBJECT */
let obj = { first: 'Abe', last: 'Choi', age: 33 };
console.log(obj);

/* SYMBOL */
// Will go over later in the course...