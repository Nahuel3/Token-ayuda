const text = document.getElementById("text") 
const password = document.getElementById("pass") 
const email = document.getElementById("email") 
function enviarformulario(){
   
    if (text.value === null || text.value === ""){
        alert("ingresa tu nombre");
    }
    
    if (password.value === null || text.value === ""){
        alert("ingresa tu pass");
    }
        if  (password.value.length <= 10){
            alert("hola")
        }
    
    if (email.value === null || text.value === ""){
        alert("ingresa tu email");
    }
};

