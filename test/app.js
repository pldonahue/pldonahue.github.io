/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 200) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
/*Scroll to top when arrow up clicked END*/

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

/*Animate On Load*/
const images = document.querySelectorAll(".anim");
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 1.1s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});
images.forEach((image) => {
  observer.observe(image);
});
