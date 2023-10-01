const num = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

const onClick = (e) => {
  let current = num.innerText * 1;
  e.target.id === "increase"
    ? (num.innerText = current + 1)
    : (num.innerText = current - 1);
};

increase.addEventListener("click", onClick);
decrease.addEventListener("click", onClick);
