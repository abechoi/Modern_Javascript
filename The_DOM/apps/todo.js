// event basics
// button
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('button click');
  // ul.innerHTML += '<li>something new</li>'; // add element example 1
  const li = document.createElement('li');  // add element example 2
  li.textContent = 'something new';
  //ul.append(li); // => appends li at the bottom
  ul.prepend(li); // => prepends li to the top
}); 
// remove ul
const ul = document.querySelector('ul');
//ul.remove();
// add line-through on click
const items = document.querySelectorAll('li');
// items.forEach(item => {
//   item.addEventListener('click', e => {
//     //console.log('item click');
//     console.log('li event');
//     e.stopPropagation(); // prevents event bubbling
//     e.target.remove();
//   });
// });
// event bubbling and delegation
ul.addEventListener('click', e => { // this can be prevented by line 21
  console.log(e.target);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});
