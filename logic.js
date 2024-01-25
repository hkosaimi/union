let hamMenu = document.getElementById("hamMenu");
let ham1 = document.getElementById("ham1");
let ham2 = document.getElementById("ham2");
let ham3 = document.getElementById("ham3");
let navLinks = document.getElementById("mobileNavLinks");
let home = document.getElementById("home");

hamMenu.onclick = () => {
  ham1.classList.toggle("ham11");
  ham2.classList.toggle("ham22");
  ham3.classList.toggle("ham33");

  navLinks.classList.toggle("show");
  home.classList.toggle("blur");
};
