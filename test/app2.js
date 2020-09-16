/*Burger Menu*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    //ToggleNav
    nav.classList.toggle("nav-active");

    //Nav-links
    navLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
      });
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.7
      }s`;
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
