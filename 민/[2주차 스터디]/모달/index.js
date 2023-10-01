const container = document.querySelector(".modal-container");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

const onClick = (e) => {
  e.target.id === "openBtn"
    ? (container.style.display = "flex")
    : (container.style.display = "none");
};

openBtn.addEventListener("click", onClick);
closeBtn.addEventListener("click", onClick);
