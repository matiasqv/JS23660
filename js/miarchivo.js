
// Clase 02 Desafío: Crear un algoritmo con un condicional

let numero =parseFloat(prompt("Ingresar un numero entero"));
if (numero % 2 == 0) {
    alert("El numero ingresado es par");
}
else if ((numero + 1) % 2 == 0) {
    alert("El numero ingresado es impar");
}
else if (numero % 2 > 0 && numero % 2 < 1) {
    alert("El numero ingresado es un numero decimal");
}
else {
    alert("No ingresaste un numero");
}