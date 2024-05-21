//HEADER SECTION STARTS
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-square-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-square-xmark");
  navbar.classList.remove("active");
};

//HEADER SECTION ENDS
