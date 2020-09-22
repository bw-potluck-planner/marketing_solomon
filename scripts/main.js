const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", (e) => {
  if (burgerMenu.classList[1] === "burger-active") {
    burgerMenu.classList.remove("burger-active");
  } else {
    burgerMenu.classList.add("burger-active");
  }
});
