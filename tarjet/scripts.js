let numTarjeta = document.getElementById("num")


// aparecer en pantalla numeros de tarjeta

numTarjeta.addEventListener("keyup", function() {
    let inputNum = event.path[0].value;
    document.getElementById("numeros").innerHTML = inputNum;
    
})

// aparecer en pantalla nombre de tarjeta
let numNombre = document.getElementById("nombre");

numNombre.addEventListener("keyup", function(){
    let inputText = event.path[0].value;
    document.getElementById("nombrePersona").innerHTML = inputText;  
})
// abrir formulario de tarjeta
let desplegar = document.getElementById("boton");
let menu = document.getElementById("abajo");



desplegar.addEventListener("click", function(){
menu.classList.toggle("aparecer")
})


let form = document.getElementById("formulario");
// Sumar meses
for (let i = 1; i <= 12; i++) {
    let opciones = document.createElement("option");
    opciones.value = i;
    opciones.innerText = i;  
    form.selectMes.appendChild(opciones)
    
}

// Sumar Años
for (let i = 2021; i <= 2029; i++) {
    let opciones = document.createElement("option");
    opciones.value = i;
    opciones.innerText = i;  
    form.selectAño.appendChild(opciones)
    
}


