// // Clase 12 : Orden

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











const misCuentas = [];

function guardarCuentaLocalStorage() {
    localStorage.setItem('misCuentas', JSON.stringify(misCuentas));
    // localStorage.setItem('Productos agregados al carrito', JSON.stringify( misCuentas ) );
    localStorage.setItem('Numero de productos agregados', misCuentas.length);
}

$(".lista").prepend('<h1>Lista</h1>');
const productos = [
    { id: 1, bebida: "Gaseosa", precioBebida: 150 },
    { id: 2, bebida: "Agua", precioBebida: 100 },
    { id: 3, bebida: "Jugo", precioBebida: 200 },
    { id: 4, bebida: "Agua gasificada", precioBebida: 120 },
]

for (const producto of productos) {    
    $(".lista-productos").prepend(`<div>
                            <h4> Producto: ${producto.bebida}</h4>
                            <b> $ ${producto.precioBebida}</b>
                            <button id="btn${producto.id}">Comprar</button>
                            </div>`);
    for (let i = 0; i < 1; i++) {
        $(`#btn${producto.id}`).click(() => {
            console.log(`Compreaste ${producto.bebida}`);
            misCuentas.push({
                id: (producto.id),
                bebida: (producto.bebida),
                precioBebida: (producto.precioBebida),
            });
            guardarCuentaLocalStorage()
        })

    }
};




// BOTON MOSTAR PEDIDO
$(".btn-mostrar").append('<button id="btn-mostrar3">Mostrar3</button>');
$("#btn-mostrar3").click(() => {
    obtenerLocalStorage();
});


function obtenerLocalStorage() {
    let guardado = JSON.parse(localStorage.getItem('misCuentas'));
    console.log(guardado);
    for (const producto of guardado) {
        // for ( let i = 0 ; i < i+1 ; i++) {
        $('#carrito__sublista').append(`<li class="sublista__item" >${producto.bebida}</li>`);
        console.log(`${producto.bebida}`);
    }
    let carritoContadorStorage = localStorage.getItem('Numero de productos agregados');
    $('#carrito__number').text(`Cantidad de Articulos:${carritoContadorStorage}`);
}




$(".btn-mostrar").append('<button id="btn-mostrar2">Mostrar</button>');
$(".fotos").prepend(`<div id="fotos2" style="width: 50%">
1: Pancho ($100)<br>
2: Hamburguesa ($350)<br>
3: Picada ($700)<br>
4: Tostados ($200)<br>
    </div>`);
$("#btn-mostrar2").click(() => {
    $("#fotos2").toggle("fast");
});






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













