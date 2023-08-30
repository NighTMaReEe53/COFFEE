// Navbar

// Selectors

const theToggle = document.querySelector(".toggle");
const theLinkUl = document.querySelector(".links");
const headerArea = document.querySelector(".header-area");
const theLink = headerArea.querySelectorAll(".nav-link");

theToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  theToggle.classList.toggle("fa-x");
  theLinkUl.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (theLinkUl.classList.contains("show")) {
    if (e.target !== theLinkUl && e.target !== theToggle) {
      theLinkUl.classList.remove("show");
      theToggle.classList.remove("fa-x")
    }
  }
});

theLinkUl.addEventListener("click", (e) => {
  e.stopPropagation();
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    headerArea.classList.add("show");
  } else {
    headerArea.classList.remove("show");
  }
});

// Add Remove Class From Link

theLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    theLink.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
