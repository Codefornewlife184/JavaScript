document.querySelector(".switcher").onclick= function () {
  let body=document.querySelector("body");

 if(body.style.color=="white")
 {
 body.style.backgroundColor="white";
 body.style.color="black";
 let switcher=document.querySelector(".switcher");
 switcher.innerHTML =
      '<i class="fas fa-sun"></i>';
      switcher.style.backgroundColor="black"
      switcher.style.color="white";  
    
    }
      else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    let switcher = document.querySelector(".switcher");
    switcher.innerHTML = '<i class="fas fa-moon"></i>';
    switcher.style.backgroundColor = "white";
    switcher.style.color = "black"; 
      }
      
};
