// event basics
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('button click');
});
const items = document.querySelectorAll('li');
items.forEach(item => {
  item.addEventListener('click', e => {
    //console.log('item click');
    console.log(e.target);
    e.target.style.textDecoration = "line-through";
  });
});
