let primera = document.getElementById("img-principal");
let segundafoto = document.getElementById("img-principal2");
let galerias = document.getElementById("galeria");
let fotito = document.getElementById("mini-foto");
let fotito2 = document.getElementById("mini-foto2");
let fotito3 = document.getElementById("mini-foto3");
let fotito4 = document.getElementById("mini-foto4");
let general = document.getElementById("contenedores");
let cruz = document.getElementById("cerrar")
let navfinal = document.getElementById("nav-responsive")
let barra = document.getElementById("bars")


primera.addEventListener("click", function(){
    galerias.classList.toggle("aparecer"),   
    segundafoto.classList.add("mostrarse"),
    general.classList.add("backgrounds"),
    cruz.classList.add("x")
   
})

cruz.addEventListener("click", function(){
    segundafoto.classList.remove("mostrarse")
    galerias.classList.remove("aparecer"),
    general.classList.remove("backgrounds")
    cruz.classList.remove("x")
   
})


barra.addEventListener("click",function(){
    navfinal.classList.toggle("desplegar")
})

