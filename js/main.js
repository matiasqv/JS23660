// // Clase 06 Desafío Complementario: Ordenar un array de objetos

let comida = 0;
let cantidadComida = 0;
let precioComida = 0;
let bebida = 0;
let cantidadBebida = 0;
let precioBebida = 0;

class Pedido {
    constructor(comida, precioComida, cantidadComida, bebida, precioBebida, cantidadBebida) {
        this.comida = comida;
        this.cantidadComida = cantidadComida;
        this.precioComida = precioComida;
        this.bebida = bebida;
        this.cantidadBebida = cantidadBebida;
        this.precioBebida = precioBebida;
        this.propina = 0;
        this.porcentajePropina = 0;
        this.iva = 0;
        this.descuento = 0;
        this.cuenta = 0;
        this.total = 0;
    }

    calcularCuenta() {
        this.cuenta = (this.cantidadComida * this.precioComida) + (this.cantidadBebida * this.precioBebida)
    }

    calcularIva() {
        this.iva = this.cuenta * 0.21;
    }

    aplicarDescuento() {
        if (this.cuenta >= 2500) {
            this.descuento = this.cuenta * -0.1;
            this.total = this.cuenta + this.descuento;
        }
        else {
            this.total = this.cuenta;
        }
    }

    darPropina() {
        this.propina = confirm("¿Te Gustaría dejar propina?");

        if (this.propina) {
            while (!this.porcentajePropina || this.porcentajePropina <= 0) {
                this.porcentajePropina = parseFloat(prompt("¿QUE %? (Solo números)"));
            }
            this.propina = this.cuenta * this.porcentajePropina / 100;
            this.total = this.total + this.propina;
        } else {
            this.propina = 0;
        }
    }
}


function tomarPedido() {

    const pedidoComida = [
        { id: 1, comida: 'Pancho', precioComida: 100 },
        { id: 2, comida: 'Hamburguesa', precioComida: 350 },
        { id: 3, comida: 'Picada', precioComida: 700 },
        { id: 4, comida: 'Tostados', precioComida: 200 },
    ];

    while (!comida || comida == 0 || comida > 5 || comida < 0) {
        comida = parseInt(prompt(
            "¿Qué va a comer? Introduce el número junto a la opción:\n 1: Pancho($100),\n 2: Hamburguesa($350),\n 3: Picada($700),\n 4: Tostados($200),\n 5: Otro comida"));

        if (comida == 1) {
            comida = pedidoComida[0].comida;
            precioComida = pedidoComida[0].precioComida;
        }
        else if (comida == 2) {
            comida = pedidoComida[1].comida;
            precioComida = pedidoComida[1].precioComida;
        }
        else if (comida == 3) {
            comida = pedidoComida[2].comida;
            precioComida = pedidoComida[2].precioComida;
        }
        else if (comida == 4) {
            comida = pedidoComida[3].comida;
            precioComida = pedidoComida[3].precioComida;
        }
        else if (comida == 5) {
            let entradaComida = prompt("Ingresar otra comida");
            let entradaPrecioComida;
            while (!entradaPrecioComida || entradaPrecioComida == 0 || entradaPrecioComida < 0) {
                entradaPrecioComida = parseInt(prompt("ingresa precio de otra comida"));
            }
            pedidoComida.push({ id: (comida), comida: (entradaComida), precioComida: (entradaPrecioComida) });
            comida = pedidoComida[4].comida;
            precioComida = pedidoComida[4].precioComida;
        }
        else {
            comida = 0;
        }
    }
    // Ordena de menor a mayor las comidas
    let ordenadosPrecioComida = [];
    ordenadosPrecioComida = pedidoComida.map(elemento => elemento);
    ordenadosPrecioComida.sort(function (a, b) {
        return a.precioComida - b.precioComida;
    });

    console.log("Ordenar por precio comida");
    console.log(ordenadosPrecioComida);

    while (!cantidadComida || cantidadComida == 0 || cantidadComida < 0) {
        cantidadComida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"));
    }

    const pedidoBebida = [
        { id: 1, bebida: "Gaseosa", precioBebida: 150 },
        { id: 2, bebida: "Agua", precioBebida: 100 },
        { id: 3, bebida: "Jugo", precioBebida: 200 },
        { id: 4, bebida: "Agua gasificada", precioBebida: 120 },
    ]

    while (!bebida || bebida == 0 || bebida > 5 || bebida < 0) {
        bebida = parseInt(prompt("¿Qué le gustaría beber? Introduce el número junto a la opción:\n 1: Gaseosa($150),\n 2: Agua($100),\n 3: Jugo($200),\n 4: Agua gasificada($120),\n 5: Otro bebida"));

        if (bebida == 1) {
            bebida = pedidoBebida[0].bebida;
            precioBebida = pedidoBebida[0].precioBebida;
        }
        else if (bebida == 2) {
            bebida = pedidoBebida[1].bebida;
            precioBebida = pedidoBebida[1].precioBebida;
        }
        else if (bebida == 3) {
            bebida = pedidoBebida[2].bebida;
            precioBebida = pedidoBebida[2].precioBebida;
        }
        else if (bebida == 4) {
            bebida = pedidoBebida[3].bebida;
            precioBebida = pedidoBebida[3].precioBebida;
        }
        else if (bebida == 5) {
            let entradaBebida = prompt("Ingresar otra bebida");
            let entradaPrecioBebida;
            while (!entradaPrecioBebida || entradaPrecioBebida == 0 || entradaPrecioBebida < 0) {
                entradaPrecioBebida = parseInt(prompt("Ingresa precio de otra bebida"));
            }
            pedidoBebida.push({ id: (bebida), bebida: (entradaBebida), precioBebida: (entradaPrecioBebida) });
            bebida = pedidoBebida[4].bebida;
            precioBebida = pedidoBebida[4].precioBebida;
        }
        else {
            bebida = 0;
        }
    }
    // Ordena las bebidas de menor a mayor precio
    let ordenadosPrecioBebida = [];
    ordenadosPrecioBebida = pedidoBebida.map(elemento => elemento);
    ordenadosPrecioBebida.sort(function (a, b) {
        return a.precioBebida - b.precioBebida;
    });

    console.log("Ordenar por precio bebida");
    console.log(ordenadosPrecioBebida);



    while (!cantidadBebida || cantidadBebida == 0 || cantidadBebida < 0) {
        cantidadBebida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"))
    }

    return new Pedido(comida, precioComida, cantidadComida, bebida, precioBebida, cantidadBebida);
}

alert("Ingrese su pedido");

const pedido = new tomarPedido();
pedido.calcularCuenta();
pedido.calcularIva();
pedido.aplicarDescuento();
pedido.darPropina();

alert(`
    Detalle de la cuenta:
    - ${pedido.cantidadComida} ${pedido.comida} x $${pedido.precioComida} = $${pedido.cantidadComida * pedido.precioComida}
    - ${pedido.cantidadBebida} ${pedido.bebida} x $${pedido.precioBebida} = $${pedido.cantidadBebida * pedido.precioBebida}
    
    SubTotal = $${pedido.cuenta} (iva = $${pedido.iva})
    -Descuento = $${pedido.descuento}
    -Propina = $${pedido.propina} (% = ${pedido.porcentajePropina})
    ==========================
    Total = $${pedido.total}
`);













