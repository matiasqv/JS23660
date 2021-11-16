// // Clase 13 : Orden


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
                            <button class="comprar" id="btn${producto.id}">Comprar</button>
                            </div>`);
    for (let i = 0; i < 1; i++) {
        $(`#btn${producto.id}`).click(() => {
            misCuentas.push({
                id: (producto.id),
                bebida: (producto.bebida),
                precioBebida: (producto.precioBebida),
            });
            guardarCuentaLocalStorage();
        });
    };
    // Modifica el color del btn cuando pasa el mouse 
    $(`#btn${producto.id}`).mouseover(function () { 
        $(`#btn${producto.id}`).css({"background": "green",})
                            .mouseout(function () { 
                                $(`#btn${producto.id}`).css({"background": "none",})
                            });
    });
};





// STYLES  CSS
        $("h4").css({
            "margin": "10px",
            "color": "blue",
            "font-size": "30px",
        });
        $("#promo").css({
            "margin": "10px",
            "color": "blue",
            "font-size": "30px",
            width: '50%',
        });
        $('#compra').css({
            width: '50%',
        });


// Funcion Guardar LocalStorage
function guardarCuentaLocalStorage() {
    localStorage.setItem('misCuentas', JSON.stringify(misCuentas));
    localStorage.setItem('Numero de productos agregados', misCuentas.length);
}

// BOTON MOSTAR PEDIDO
$("#btn-mostrar").prepend('<button id="btn-mostrar">Mostrar Pedido</button>');
$("#btn-mostrar").click(() => {
    obtenerLocalStorage();
});

// Funcion Recuperar LocalStorage
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
"HAS CLICK AQUI"<br>
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



// Animacion, hacer click en el div que muestra la promocion

$("#promo").click(function (){
    $("#btn-promo").fadeOut();
    $("#promo").css("color","gray")
                .slideUp(2000)
                .delay(2000)
                .slideDown(2000, function(){
                    $("#btn-promo").fadeIn();
                    $("#promo").css({"color":"black",
                    "background": "green",
                    "background-color": "green",
                    "border-radius": "5%",
                    "border": "5px black solid"
                    });
                });
});

