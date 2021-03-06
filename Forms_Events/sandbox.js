const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
//const username = document.querySelector("#username");
form.addEventListener("submit", e => {
  e.preventDefault(); // prevents default action (refresh)
  //console.log(form.username.value); // grabs id or name
  // validation
  const username = form.username.value;
  const regex = /^[a-zA-Z]{6,12}$/;

  if(regex.test(username)){
    // feedback good info
    feedback.textContent = "Username is valid!";
  }else{
    // feedback help info
    feedback.textContent = "Username must contains letters only with 6-12 characters long.";
  }
});
// regex
let username2 = "Abraham";
let pattern = /^[a-zA-Z]{6,}$/;
// test username against the pattern
let result = pattern.test(username2);
console.log(result); // => true
// search pattern against the username
result = username2.search(pattern);
console.log(result); // => 0, 0 = position of the match
username2 = "123Abraham321";
pattern = /[a-zA-Z]{6,}/;
result = username2.search(pattern);
console.log(result); // => 3, 3 = position of the match, A = 3
// keyup event - live feedback
form.username.addEventListener("keyup", e => {
  //console.log(e.target.value, form.username.value);
  console.log(e);
  if(pattern.test(e.target.value)){
    console.log("passed");
    form.username.setAttribute("class", "success");
  }else{
    console.log("failed");
    form.username.setAttribute("class", "error");
  }
});
