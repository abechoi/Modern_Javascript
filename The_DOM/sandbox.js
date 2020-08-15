/*******/
/* DOM */
/*******/

// query selector
// p = first p tag
// .error = first error class
// div.error = first div with error class
// body > h1 = first h1 in body
const para = document.querySelector('body > h1');
console.log(para);
// query selector all
const all = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(all);
console.log(errors);
// query selector all - forEach
all.forEach(p => console.log(p));
errors.forEach(e => console.log(e));
// query selector all - by elements
console.log(all[0]);
console.log(errors[0]);
// get element by id
const title = document.getElementById('page-title');
console.log(title);
// get element by class
const elements = document.getElementsByClassName('error');
console.log(elements); // => HTML collection, which does not have the forEach function
// elements.forEach(e => console.log(e)); // => Error: errors.forEach is not a function
// get elements by tag
const paras = document.getElementsByTagName('p');
console.log(paras); // => HTML collection, which does not have the forEach function