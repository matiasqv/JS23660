// Clase 06 Desafío: Incorporar Arrays

let comida = 0;
let comida1 = 0;
let cantidadComida = 0;
let precioComida = 0;
let bebida = 0;
let cantidadBebida = 0;
let precioBebida = 0;

class Pedido {
        constructor(comida, precioComida, cantidadComida, bebida, precioBebida, cantidadBebida){
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

    calcularCuenta(){
        this.cuenta = (this.cantidadComida*this.precioComida) + (this.cantidadBebida*this.precioBebida)
    }

    calcularIva(){
    this.iva = this.cuenta * 0.21;
    }

    aplicarDescuento() {
        if(this.cuenta >= 2500) {
            this.descuento = this.cuenta * -0.1;
            this.total = this.cuenta + this.descuento;
        }
        return this.total;
    }
    
    darPropina() {
        this.propina = confirm("¿Te Gustaría dejar propina?");
        
        if(this.propina) { 
            while(!this.porcentajePropina  || this.porcentajePropina <= 0)
            {
                this.porcentajePropina = parseFloat(prompt("¿QUE %? (Solo números)"));
            }
            this.propina = this.cuenta * this.porcentajePropina /100;
            this.total = this.total + this.propina;      
        } else {
            this.propina = 0;
        }
    }
}






function tomarPedido() {


    const pedidoComida = [
        {id:1, comida: 'Pancho($100)', precioComida: 100},
        {id:2, comida: 'Hamburguesa($350)', precioComida: 350},
        {id:3, comida: 'Picada($700)', precioComida: 700},
        {id:4, comida: 'Tostados($200)', precioComida: 200}
    ];



    while(!comida || comida == 0 || comida > 4 || comida < 0) {
        comida = parseInt(prompt(
            "¿Qué va a comer? Introduce el número junto a la opción:\n 1:Pancho($100),\n 2:Hamburguesa($350),\n 3:Picada($700),\n 4:Tostados($200)"));
             

        console.log(comida);
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
        };
    
    
    } ;
    





    console.log(comida1);
    console.log(precioComida);







    while(!cantidadComida || cantidadComida == 0 || cantidadComida < 0) {
        cantidadComida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"));
    }

    while(!bebida || bebida == 0 || bebida > 4 || bebida < 0) {
        bebida = parseInt(prompt("¿Qué le gustaría beber? Introduce el número junto a la opción:\n 1:Gaseosa($150),\n 2:Agua($100),\n 3:Jugo($200),\n 4:Agua gasificada($120)"));
    }

    switch (bebida) {
        case 1 :
            bebida = "Gaseosa ($150)";
            precioBebida = 150;
            break;
        case 2 :
            bebida = "Agua ($100)";
            precioBebida = 100;
            break;
        case 3 :
            bebida = "Jugo ($200))";
            precioBebida = 200
            break;
        case 4 :
            bebida = "Agua gasificada ($120)";
            precioBebida = 120;
            break;
    }

    while(!cantidadBebida || cantidadBebida == 0 || cantidadBebida < 0) {
        cantidadBebida = parseInt(prompt("Introduce la cantidad deseada.(Solo números)"));
    }




    console.log(comida);
    console.log(comida1);
    console.log(precioComida);
    console.log(cantidadComida);
    console.log(bebida);
    console.log(precioBebida);
    console.log(cantidadBebida);


    return new Pedido(comida, precioComida, cantidadComida, bebida, precioBebida, cantidadBebida)



    







}


alert("Ingrese su pedido");

const pedido = new tomarPedido();
pedido.calcularCuenta();
pedido.calcularIva();
pedido.aplicarDescuento();
pedido.darPropina();

alert(`
    Detalle de la cuenta:
    - ${pedido.cantidadComida} x ${pedido.comida} = $${pedido.cantidadComida*pedido.precioComida}
    - ${pedido.cantidadBebida} x ${pedido.bebida} = $${pedido.cantidadBebida*pedido.precioBebida}
    
    SubTotal = $${pedido.cuenta} (iva = $${pedido.iva})
    -Descuento = $${pedido.descuento}
    -Propina = $${pedido.propina} (% = ${pedido.porcentajePropina})
    ==========================
    Total = $${pedido.total}
`);






