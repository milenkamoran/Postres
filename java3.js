
//alert(localStorage.getItem("nombre"));
//document.getElementById("encabezado").innerHTML ="Hola "+localStorage.getItem("nombre");


var puntaje = 0
if(document.getElementById("a1r2").checked == true){
    puntaje=puntaje+4;
}

if(document.getElementById("a2r4").checked == true){
    puntaje=puntaje+4;
}

if(document.getElementById("a3r3").checked == true){
    puntaje=puntaje+4;
}

if(document.getElementById("a4r2").checked == true){
    puntaje=puntaje+4;
}

if(document.getElementById("a5r4").checked == true){
    puntaje=puntaje+4;
}

alert("TU PUNTAJE OBTENIDO ES: "+puntaje);
