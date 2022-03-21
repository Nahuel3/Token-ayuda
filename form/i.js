let boton = document.getElementById("boton");
let boton2 =document.getElementById("boton2");
let form = document.getElementById("form");
let farm = document.getElementById("farm");




boton.addEventListener("click", function(){
    form.classList.toggle("esconder")
       
    if (form.classList.contains("esconder")){
      farm.classList.add("mostrar")         
    }
    else if (farm.classList.contains("mostrar")){
    
      (farm.classList.remove("mostrar"))
    }
      
});

boton2.addEventListener("click", function(){
  if (form.classList.contains("esconder")){
    form.classList.remove("esconder")
    farm.classList.remove("mostrar")
  }
});


