//personalizar la bandera con el símbolo en el medio
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");


pincel.fillStyle = "lightblue"; 
pincel.fillRect(0,0,600,100); 

pincel.fillStyle = "lightblue"; 
pincel.fillRect(0,200,600,100);

pincel.fillStyle = "yellow";
pincel.beginPath(); //esta propiedad inicia un nuevo camino en mi pizzara
pincel.arc(300,150,50,0,2*3.14);
pincel.fill();
