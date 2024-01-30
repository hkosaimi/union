let hamMenu = document.getElementById("hamburger");
let ham1 = document.getElementById("line1");
let ham2 = document.getElementById("line2");
let ham3 = document.getElementById("line3");
let navLinks = document.getElementById("links2");

hamMenu.onclick = () => {
  ham1.classList.toggle("ham11");
  ham2.classList.toggle("ham22");
  ham3.classList.toggle("ham33");

  navLinks.classList.toggle("show-links");
};
