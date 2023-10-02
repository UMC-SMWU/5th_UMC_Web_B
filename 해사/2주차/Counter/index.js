const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number);
console.log(increase);
console.log(decrease);

increase.addEventListener('click', () => {
  number.innerText = parseInt(number.innerText, 10) + 1;
});
decrease.addEventListener('click', () => {
  if (number.innerText === '0') return;
  number.innerText = parseInt(number.innerText, 10) - 1;
});
