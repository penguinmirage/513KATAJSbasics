const button = document.querySelector(".show-hide__button");
const hiddenItems = document.querySelectorAll(".hidden-item");
let isHidden = true;
button.addEventListener("click", () => {
  button.textContent = isHidden ? "Показать все" : "Скрыть";

  isHidden = !isHidden;
  hiddenItems.forEach((item) => item.classList.toggle("hidden"));
});
