// nav menu click scroll

const menuItems = document.querySelectorAll(".site-nav a href^=['#']");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

// toTop button

function toTop() {
  window.scrollTo(0, 0);
}