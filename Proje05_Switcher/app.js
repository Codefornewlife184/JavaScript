document.querySelector(".switcher").onclick= function () {
  let body=document.querySelector("body");

body.style.backgroundColor = "white";
body.style.color = "black";
let switcher = document.querySelector(".switcher");
switcher.innerHTML = '<i class="fas fa-sun"></i>';
switcher.style.backgroundColor = "black";
switcher.style.color = "white";    }