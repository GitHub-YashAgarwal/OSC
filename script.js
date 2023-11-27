const hamburger = document.querySelector(".hamburger");
const navElements = document.querySelector(".nav-elements");

hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("hamburger-clicked")) {
    navElements.classList.remove("appear");
    hamburger.classList.remove("hamburger-clicked");
  } else {
    navElements.classList.add("appear");
    hamburger.classList.add("hamburger-clicked");
  }
});

const toggleMenu = () => document.body.classList.toggle("open");
