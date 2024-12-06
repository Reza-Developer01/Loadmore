const contentBtn = document.querySelector(".content__btn");
const content = document.querySelector(".content");

let flag = false;

contentBtn.addEventListener("click", () => {
  content.classList.toggle("content--open");
  flag = !flag;
  flag
    ? (contentBtn.children[0].textContent = "مشاهده کمتر")
    : (contentBtn.children[0].textContent = "مشاهده بیشتر");
});
