const reloj = () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let mins = fecha.getMinutes();
     let sec = fecha.getSeconds();
    
    document.getElementById("tiempo").innerHTML = `${hora}:${mins}:${sec}`;
}
 setInterval (reloj, 1000);