let hamMenu = document.getElementById("hamMenu");
let ham1 = document.getElementById("ham1");
let ham2 = document.getElementById("ham2");
let ham3 = document.getElementById("ham3");

hamMenu.onclick = () => {
  /* ham1.style.transform = "rotate(-50deg)";
  ham2.style.display = "none";
  ham3.style.transform = "rotate(50deg)"; */
  ham1.classList.toggle("ham11");
  ham2.classList.toggle("ham22");
  ham3.classList.toggle("ham33");
};
