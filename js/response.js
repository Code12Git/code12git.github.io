menu = document.querySelector(".menu");
navbar = document.querySelector(".navbar");
rightnav = document.querySelector(".rightnav");
navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
  navbar.classList.toggle("h__nav");
  rightnav.classList.toggle("v__class");
  navlist.classList.toggle("v__class");
});
