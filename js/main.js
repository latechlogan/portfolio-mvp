const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

// nav toggle
let navOpen = false;

function toggleMenu() {
  navOpen = !navOpen;

  if (navOpen) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  body.classList.toggle("nav-open");
  navMenu.classList.toggle("active");
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
}

hamburger.addEventListener("click", (e) => {
  e.preventDefault;
  if (window.innerWidth < 768) {
    toggleMenu();
  }
});

navMenu.addEventListener("click", (e) => {
  e.preventDefault;
  if (window.innerWidth < 768) {
    toggleMenu();
  }
});
