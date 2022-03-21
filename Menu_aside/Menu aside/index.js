let navCerrado = document.getElementById('navCerrado');
let navAbierto = document.getElementById('navAbierto');

navCerrado.addEventListener("mouseenter", function(e){
    navCerrado.classList.add('oculto')
    navAbierto.classList.remove('oculto')
})


navAbierto.addEventListener("mouseleave", function(e){
    navCerrado.classList.remove('oculto')
    navAbierto.classList.add('oculto')

})