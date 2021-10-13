
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


/* // Clase 03 Desafío: Crear un algoritmo utilizando un ciclo

// Clacula el area y perimetro de un cuadrado rectangulo y saliendo por consola, tantas veces como se quiera

let lado = parseFloat(prompt("Ingrese el lado del cuadrado en cm.\nPasa salir ingrese 0 "));
let area = (lado * lado);
let perimetro = (lado * 4);
while ( lado !=  0) {
    console.log ("El area del cuadrado es: "+area+" cm²"+"\nY su perimetro es: "+perimetro+" cm" );
    lado = parseFloat(prompt("Ingrese el lado del cuadrado en cm.\nPasa salir ingrese 0 "));
    area = (lado * lado);
    perimetro = (lado * 4);
}; */


// Clase 03 Desafío: Simulador interactivo


let cuenta = 0;
let total = 0;
let comida = 0;
let bebida = 0;
let cantidadBebida = 0;
let cantidadComida = 0;
let precioComida = 0;
let precioBebida =0;
let propina = 0;
let porcentajePropina = 0;
let iva = 0;
let descuento =0;

function pedirComida() {

    while(isNaN(comida) || comida == 0 || comida > 4 || comida < 0) {
        comida = parseInt(prompt(
            "¿Qué va a comer? Introduce el número junto a la opción:\n 1:Pancho($100),\n 2:Hamburguesa($350),\n 3:Picada($700),\n 4:Tostados($200)"));
    }

    while(isNaN(cantidadComida) || cantidadComida == 0 || cantidadComida < 0) {
        cantidadComida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"));
    }

    switch (comida) {
        case 1 :
            comida = "Pancho ($100)";
            precioComida = 100;
            cuenta += (precioComida * cantidadComida);
            break;
        case 2 :
            comida = "Hamburguesa ($350)";
            precioComida = 350;
            cuenta += (precioComida * cantidadComida);
            break;
        case 3 :
            comida = "Picada ($700)";
            precioComida = 700;
            cuenta += (precioComida * cantidadComida);
            break;
        case 4 :
            comida = "Tostados($200)";
            precioComida = 200;
            cuenta += (precioComida * cantidadComida);
            break;
    }
}

function pedirBebida() {

    while(isNaN(bebida) || bebida == 0 || bebida > 4 || bebida < 0) {
        bebida = parseInt(prompt("¿Qué le gustaría beber? Introduce el número junto a la opción:\n 1:Gaseosa($150),\n 2:Agua($100),\n 3:Jugo($200),\n 4:Agua gasificada($120)"));
    }

    while(isNaN(cantidadBebida) || cantidadBebida == 0 || cantidadBebida < 0) {
        cantidadBebida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"));
    }

    if(cantidadBebida) {
        switch (bebida) {
            case 1 :
                bebida = "Gaseosa ($150)";
                precioBebida = 150;
                cuenta += (precioBebida * cantidadBebida);
                break;
            case 2 :
                bebida = "Agua ($100)";
                precioBebida = 100;
                cuenta += (precioBebida * cantidadBebida);
                break;
            case 3 :
                bebida = "Jugo ($200))";
                precioBebida = 150;
                cuenta += (precioBebida * cantidadBebida);
                break;
            case 4 :
                bebida = "Agua gasificada ($120)";
                precioBebida = 120;
                cuenta += (precioBebida * cantidadBebida);
                break;
        }
    }
}

function calcularIva(){
    iva = cuenta * 0.21;
}

function aplicarDescuento() {
    if(cuenta >= 2500) {
        descuento = cuenta * -0.1;
        total = cuenta + descuento;
    }
    return total;
}


function darPropina() {
    propina = confirm("¿Te Gustaría dejar propina?");
    
    if(propina) { 
        while(isNaN(porcentajePropina)  || porcentajePropina <= 0)
        {
            porcentajePropina = parseFloat(prompt("¿QUE %? (Solo números)"));
        }
        propina = cuenta * porcentajePropina /100;
        total = total + propina;      
    } else {
        propina = 0;
    }
}


alert("Ingrese su pedido");

pedirComida();
pedirBebida();
calcularIva();
aplicarDescuento();
darPropina();

alert(`
    Detalle de la cuenta:
    - ${cantidadComida} x ${comida} = $${cantidadComida*precioComida}
    - ${cantidadBebida} x ${bebida} = $${cantidadBebida*precioBebida}
    
    SubTotal = $${cuenta} (iva = $${iva})
    -Descuento = $${descuento}
    -Propina = $${propina} (% = ${porcentajePropina})
    ==========================
    Total = $${total}
`);













