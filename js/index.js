const nav = document.getElementsByTagName("nav")[0];
const menuButton = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("shown");
  menuButton.classList.toggle("nav-item-active");
});
