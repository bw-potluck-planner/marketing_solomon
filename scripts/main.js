const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-links");

burgerMenu.addEventListener("click", (e) => {
  mobileMenu.style.webkitAnimation = "none";
  mobileMenu.style.animation = "none";

  if (burgerMenu.classList[1] === "burger-active") {
    burgerMenu.classList.remove("burger-active");
    mobileMenu.style.webkitAnimation = "fold-up 0.3s ease-in both";
    mobileMenu.style.animation = "fold-up 0.3s ease-in both";

    setTimeout(() => {
      mobileMenu.classList.remove("active-mobile");
    }, 300);
  } else {
    burgerMenu.classList.add("burger-active");
    mobileMenu.classList.add("active-mobile");

    mobileMenu.style.webkitAnimation = "expand-down 0.3s ease-in both";
    mobileMenu.style.animation = "expand-down 0.3s ease-in both";
  }
});
