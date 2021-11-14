// // Clase 12 : Orden


const misCuentas = [];

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
            misCuentas.push({
                id: (producto.id),
                bebida: (producto.bebida),
                precioBebida: (producto.precioBebida),
            });
            guardarCuentaLocalStorage()
        })
    }
};

function guardarCuentaLocalStorage() {
    localStorage.setItem('misCuentas', JSON.stringify(misCuentas));
    localStorage.setItem('Numero de productos agregados', misCuentas.length);
}

// BOTON MOSTAR PEDIDO
$("#btn-mostrar").prepend('<button id="btn-mostrar">Mostrar Pedido</button>');
$("#btn-mostrar").click(() => {
    obtenerLocalStorage();

});


function obtenerLocalStorage() {
    let guardado = JSON.parse(localStorage.getItem('misCuentas'));
    $('#compra').append(`<h1>Resumen</h1>`);
    $("#compra").prepend('<button id="btn-cerrar">Cerrar</button>');
    $("#btn-cerrar").click(() => {
        location.reload();

    });
    $("#btn-mostrar").hide();
    for (const producto of guardado) {
        $('#compra').append(`<li class="sublista__item" >${producto.bebida}</li>`);
    }
}


// PROMOCION 

$("#btn-promo").append('<button id="btn-promo">Mostrar Promociones</button>');
$("#promo").prepend(`<div id="promo">
1: Pancho ($100)<br>
2: Hamburguesa ($350)<br>
3: Picada ($700)<br>
4: Tostados ($200)<br>
    </div>`);
// Oculta
$("#promo").hide();

$("#btn-promo").click(() => {
    $("#promo").toggle("slow");
});
