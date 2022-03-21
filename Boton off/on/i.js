let boton = document.getElementById("boton");
let text = document.getElementById("h1");

boton.addEventListener("click", function(){
    boton.classList.toggle("mostrar")
    if (boton.classList.contains("mostrar")){
        text.innerHTML = "Encendido"
    }
    else{
        text.innerHTML = "Apagado"
    }
});


