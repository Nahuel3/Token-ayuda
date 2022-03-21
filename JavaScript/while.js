// USando solo while
// let numero = 0;
// while (numero <=6){
 //   numero++;
 //   document.write (numero)
// }


// Ahora usando Do
 //  let numero = 0;
 //   do{
  //   numero++;
  //   document.write (numero)
 //  }
//   while (numero <=6)

// break se usa con while y es para frenar en ese momento el programa, es decir que cuando llegue a 10 se deje de ejecutar el while 

//   let numero = 0;
//   while (numero < 100 ){
//    numero++;
//   document.write (numero)
//    if (numero == 10){
//        break;
       
//    }
//  }

//  for se declara la variable se inicia y termina en el mismo renglon el "<br>" se puede usar en todos para dejar espacio entre cada numero

for (let i = 0; i < 7; i++) {
    document.write (i + "<br>");
    
}
// continue se usa para saltear ese numero y seguir con el resto, en cambio break corta en ese numero y no sigue
for (let i = 0; i < 20; i++){
    if(i == 12 ){
        continue
    }
    document.write (i+"<br>")
}

let animales = ["gato","perro","tiranosaurio"]
// con in nos muestra la posicion de los animales, es decir 0 1 2 

for  (animal in animales){
    document.write(animal + "<br>")
}

// Con of nos muestra la lista de animales
for  (animal of animales){
    document.write(animal + "<br>")
}



// 
//let numero = 15
//while (numero < 30){
//    numero++
//    if (numero == 25){
//        break
//    }
//    document.write(numero)
//}

























