let button = document.getElementById("contenedor-boton");

button.addEventListener("click" , function(){
    if (button.classList.contains("active")){

        button.classList.remove("active");
    }
    else (button.classList.add("active"));
    
});