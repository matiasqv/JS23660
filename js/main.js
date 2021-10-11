
/* // Clase 02 Desafío: Crear un algoritmo con un condicional

let numero =parseFloat(prompt("Ingresar un numero entero"));
if (numero % 2 == 0) {
    alert("El numero ingresado es par");
}
else if ((numero + 1) % 2 == 0) {
    alert("El numero ingresado es impar");
}
else if ((numero % 2 > 0) && (numero % 2 < 1)) {
    alert("El numero ingresado es un numero decimal");
}
else {
    alert("No ingresaste un numero");
} */


// Clase 03 Desafío: Crear un algoritmo utilizando un ciclo

// Clacula el area y perimetro de un cuadrado rectangulo y saliendo por consola, tantas veces como se quiera

let lado = parseFloat(prompt("Ingrese el lado del cuadrado en cm.\nPasa salir ingrese 0 "));
let area = (lado * lado);
let perimetro = (lado * 4);
while ( lado !=  0) {
    console.log ("El area del cuadrado es: "+area+" cm²"+"\nY su perimetro es: "+perimetro+" cm²" );
    lado = parseFloat(prompt("Ingrese el lado del cuadrado en cm.\nPasa salir ingrese 0 "));
    area = (lado * lado);
    perimetro = (lado * 4);
};