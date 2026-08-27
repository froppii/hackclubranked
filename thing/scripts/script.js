document.querySelector('.blob')?.addEventListener('click', () => {
  document.body.classList.toggle('clicked');
});document.querySelector('.blob')?.addEventListener('click', () => {
  document.body.classList.toggle('clicked');
});

console.log("mega penis")

document.querySelector('.poop')?.addEventListener('click', () => {
  document.body.appendChild(document.createElement("div"))
})

let poopTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const display = document.getElementById("display");

function start() {
  if (timerInterval) return;
  poopTime = Date.now() - elapsedTime;
  timerInterval = setInterval(update, 10);
}

function update() {
  elapsedTime = Date.now - poopTime;
  display.text
}