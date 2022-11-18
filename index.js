const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.onclick = function () {
  color.classList.toggle("active");
};
