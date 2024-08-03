const menu = document.getElementById("menu");
const menuClose = document.getElementById("menuClose");
const nav = document.querySelector(".nav-links");
menu.addEventListener("click", (e) => {
  e.preventDefault();
  menu.style.display = "none";
  menuClose.style.display = "block";
  nav.style.display = "block";
  if ((menuClose.style.display = "block")) {
    menuClose.addEventListener("click", (e) => {
      menu.style.display = "block";
      menuClose.style.display = "none";
      nav.style.display = "none";
    });
  }
});
