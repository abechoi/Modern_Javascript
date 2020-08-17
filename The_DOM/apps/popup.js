// display popup when button is clicked
const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
button.addEventListener("click", () => {
  popup.style.display = "block";
});
// close popup when X is clicked
const close = document.querySelector(".popup-close");
close.addEventListener("click", () => {
  popup.style.display = "none";
});
// close popup when background is clicked
popup.addEventListener("click", () => {
  popup.style.display = "none";
})