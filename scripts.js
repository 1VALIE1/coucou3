// 🎯 Je cible mes éléments HTML
var burgerToggler = document.querySelector("#burger-toggler");
var burgerIcon = document.querySelector(".fa-bars");
var sidebar = document.querySelector('#sidebar');

// 👀 Je place un écouteur d'évènement au clic
burgerToggler.addEventListener("click", function() {
  var closed = burgerIcon.classList.toggle("fa-bars");
  burgerIcon.classList.toggle("fa-xmark");
  if (closed == true) {
    // Je veux masquer mon menu
    sidebar.style.left = "-350px";
  } else {
    // Je veux afficher mon menu
    sidebar.style.left = "0px";
  }
});