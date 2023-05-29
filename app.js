class Menu {
    constructor(valor, tipo, cantidad){
        this.valor =valor;
        this.tipo =tipo;
        this.cantidad =cantidad;
    }
}

let precio = [
    {tipo: "napolitana", valor: "1400"},
    {tipo: "fugaseta", valor: "1300"},
    {tipo: "muzzarela", valor: "1300"},
]

function encargarpedido(){
    const elpedido = new Menu(valor, tipo, cantidad)
    pedido.push(elpedido)
}


let pedido = []





let nombre = prompt("Ingrese su nombre")

function Bienvenida(){
    pizzaElegida = prompt("Bienvenido" + " " + nombre + " " + 'a nuestra pizzera, a continuacion te mostraremos nuestras opciones para que eligas la que mas te guste \n 1:pizza comun \n 2:pizza especial \n 3:pizza napolitana')
    if(pizzaElegida ==="1"){
        alert('Usted a seleccionado pizza comun con un valor de'  + ' ' + precioComun)
    }
    else if(pizzaElegida==="2"){
        alert('Usted a seleccionado pizza especial con un valor de' + ' ' + precioEspecial)
    }
    else if(pizzaElegida==="3"){
        alert('Usted a seleccionado pizza napolitana con un valor de'  + ' ' + precioNapolitana)
    }
    else if(pizzaElegida!="1. 2. 3"){
        valorInvalido()
    }
}

function valorInvalido(){
    opciones = prompt('El valor ingresada no es valida, por favor eliga una de las siguientes opciones \n 1: Volver a comprar \n 2: Finalizar')

}

function MuchasGracias(){
    alert('Muchas gracias por elegirnos, lo esperamos pronto!')
}


pizzaElegida =
precioComun = 1000
precioEspecial = 1200
precioNapolitana = 1500


/* 
Bienvenida()

while(opciones!=""){
    if (opciones==="1") {
        Bienvenida()
    }
    else if(opciones==="2"){
        MuchasGracias()
    }
} */

