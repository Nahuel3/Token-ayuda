//num1 = 35;
//num2 = 10;
//resultado = (num1 != num2)
//num3 = 5;
//num4 = 55;
//total = (num3 > num4)
//document.write (resultado || total)

//  || es para cuando hay uno que es true (positivo) a pesar de que haya uno que es false en la pantalla nos muestra true debido a que en uno se cumple la condicion true

//num1 = 35;
//num2 = 10;
//resultado = (num1 != num2)
//num3 = 5;
//num4 = 55;
//total = (num3 > num4)
//document.write (resultado && total)
// cuando es && con que haya 1 en el q no se cumpla la condicion nos muestra false a pesar de haber 1 true que cumple la condicion

//num1 = 35;
//num2 = 10;
//resultado = (num1 != num2)
//num3 = 5;
//num4 = 55;
//total = (num3 > num4)
//document.write (!resultado)
// en este caso el signo ! de admiracion para abajo cambia el signo es decir, si el resultado verdadero es true, con este signo pasa a false y si era false con este signo pasa a true





let dinerocofla = prompt("cuanto plata tener jorge")

if (dinerocofla >= 0.3 && dinerocofla <= 0.6){
    alert ("comprate un helado de fresa")
}
else if (dinerocofla >= 0.6 && dinerocofla <= 1){
    alert ("comprate una canastita")

}
else if (dinerocofla >= 1 && dinerocofla <= 1.5){
    alert ("comprate un pancho")
    
}
else if (dinerocofla >= 1.5 && dinerocofla <= 2.5){
    alert ("comprate un paty")    
}
else if (dinerocofla >= 2.5 && dinerocofla <= 4.5){
    alert ("comprate una docena de empanadas")    
}


let frutas = ["banana","pera","manzana","durazno"]
alert (frutas [0])