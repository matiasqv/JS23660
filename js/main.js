// // Clase 14 :  AJAX en tu Proyecto
$(document).ready(() => {

    const misCuentas = [];

    $(".lista").prepend('<h1>Lista</h1>');

    // obtener la información de un archivo JSON
    const URL_JSON = "../js/json_productos.json"
    $.getJSON(URL_JSON, function (respuesta, estado) {
        if (estado === "success") {
            let productos = respuesta;
            for (const productoBebida of productos.bebidas) {
                // Lista de productos
                $(".lista-productos").append(`<div>
                                    <h4> Producto: ${productoBebida.bebida}</h4>
                                    <b> $ ${productoBebida.precioBebida}</b>
                                    <button class="comprar" id="btn${productoBebida.id}">Comprar</button>
                                    </div>`);
                for (let i = 0; i < 1; i++) {
                    $(`#btn${productoBebida.id}`).click(() => {
                        misCuentas.push({
                            id: (productoBebida.id),
                            bebida: (productoBebida.bebida),
                            precioBebida: (productoBebida.precioBebida),
                        });
                        guardarCuentaLocalStorage();
                    });
                };
                // Modifica el color del btn cuando pasa el mouse 
                $(`#btn${productoBebida.id}`).mouseover(function () {
                    $(`#btn${productoBebida.id}`).css({ "background": "green", })
                        .mouseout(function () {
                            $(`#btn${productoBebida.id}`).css({ "background": "none", })
                        });
                });
            };

            // Lista de Promocion
            for (const productoComida of productos.comidas) {
                $("#promo").append(`<div>
                                    <h4> Producto: ${productoComida.comida}</h4>
                                    <b> $ ${productoComida.precioComida}</b>
                                    <button class="comprar" id="btn2${productoComida.id}">Comprar</button>
                                    </div>`);
                for (let i = 0; i < 1; i++) {
                    $(`#btn2${productoComida.id}`).click(() => {
                        misCuentas.push({
                            id: (productoComida.id),
                            comida: (productoComida.comida),
                            precioComida: (productoComida.precioComida),
                        });
                        guardarCuentaLocalStorage();
                    });
                };
                // Modifica el color del btn cuando pasa el mouse 
                $(`#btn2${productoComida.id}`).mouseover(function () {
                    $(`#btn2${productoComida.id}`).css({ "background": "green", })
                        .mouseout(function () {
                            $(`#btn2${productoComida.id}`).css({ "background": "grey", })
                        });
                });
            };
        } else {
            console.log(estado);
        }
    });


    // PROMOCION 

    $("#btn-promo").append('<button id="btn-promo">Mostrar Promociones</button>');

    // Oculta
    $("#promo").hide();

    $("#btn-promo").click(() => {
        $("#promo").toggle("slow");
    });




    // STYLES  CSS
    $("h4").css({
        "margin": "10px",
        "color": "blue",
        "font-size": "30px",
    });
    $("#promo").css({
        "margin": "10px",
        "color": "blue",

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
        const resultBebida = guardado.filter(guardado => guardado.bebida);
        for (const producto of resultBebida) {
            console.log(producto);
            $('#compra').append(`<li class="sublista__item" >${producto.bebida} $ ${producto.precioBebida}</li>`);
        }
        const resultComida = guardado.filter(guardado => guardado.comida);
        for (const producto of resultComida) {
            console.log(producto);
            $('#compra').append(`<li class="sublista__item" >${producto.comida} $ ${producto.precioComida}</li>`);
        }
    }








    //Usamos GET para obtener información del servidor
    const URLGET = "https://jsonplaceholder.typicode.com/albums/1/photos"
    $("body").append('<button id="btn3">Mostrar información del servidor</button>');
    $("#btn3").click(() => {

        $.get(URLGET, function (respuesta, estado) {

            if (estado === "success") {

                let misDatos = respuesta;

                for (const dato of misDatos) {
                    $("body").append(`<div>
                    <h3>${dato.id}</h3>
                    <p> ${dato.title}</p>
                    <img src=${dato.url}></img>
                                        </div>`);
                }
            } else {
                console.log(estado);
            }
        });
    });



});