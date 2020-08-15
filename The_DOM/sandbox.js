/*******/
/* DOM */
/*******/

// query selector
// p = first p tag
// .error = first error class
// div.error = first div with error class
// body > h1 = first h1 in body
const para = document.querySelector('p');
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
// inner text - updating text within tags
const changeMe1 = document.querySelector('p');
console.log(changeMe1.innerText); // => Hello World
changeMe1.innerText = "changeMe.innerText has been updated.";
const changeMe2 = document.querySelectorAll('p');
changeMe2.forEach(me => {
  console.log(me.innerText);
  me.innerText += " ...extended text...";
});
const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = "<h2>This is a new h2</h2>";
// output array as html
const ul = document.querySelector('ul');
const people = ['Abe', 'Jong-Hae', 'Choi'];
people.forEach(person => {
  ul.innerHTML += `<li>${person}</li>`;
});
// getAttribute | setAttribute example 1
const link = document.querySelector('a');
console.log(link.getAttribute('href')); // => https://www.google.com
link.setAttribute('href', 'https://abechoi.com');
link.innerText = "Abe Choi Apps!";
// getAttribute | setAttribute example 2
const msg = document.querySelector('p');
console.log(msg.getAttribute('class')); // => error
msg.setAttribute('class', 'success'); // => success
//msg.setAttribute('style', 'color: green;');
msg.setAttribute('class', 'error'); // => back to error
// style property
title.setAttribute('style', 'color: salmon');
console.log(title.style); // => all CSS properties
console.log(title.style.color); // => salmon
title.style.color = "darkblue";
title.style.margin = "50px"; // This is better than setAttribute because it does not override current CSS
title.style.fontSize = "60px";
title.style.margin = ''; // Resets property
// changing classes
console.log(para); // => first p tag
console.log(para.classList);
para.classList.add('error');
para.classList.remove('error');
para.classList.add('success');
// CHALLENGE: if a p tag contains success or error, add the corresponding class
console.log(all); // all = all p tags
console.log(all[0].innerText.includes('changeMe'));
all.forEach(p => {
  // GOOD! But p.textContent.includes('error') is better because it takes invisible text as well
  if(p.innerText.includes('error')){
      p.classList.add('error');
  }else if(p.innerText.includes('success')){
      p.classList.add('success');
  }
});
// toggle
title.classList.toggle('test'); // => class="test"
title.classList.toggle('test'); // => class=""