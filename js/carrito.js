// CARRITO DE COMPRAS

// MOSTRAR Y OCULTAR CARRITO CON ANIMACION
$('#carrito').click(function (e) { 
    e.preventDefault();

    $('#carritoInner').animate({right: 0}, 1000, function () {console.log('ok');});
    
    $('#productos, main').css({'opacity': '0.5'});
});

$('#closeCart').click(function (e) { 
    e.preventDefault();

    cerrarCarrito();
});

$('#keepShopping').click(function (e) { 
    e.preventDefault();

    cerrarCarrito();
});

let productosCarrito = []; //ARRAY DE PRODUCTOS AGREGADOS AL CARRITO    

let total = 0; //TOTAL DE LA COMPRA

let totalProductosAñadidos = 0; //CONTADOR DE PRODUCTOS AGREGADOS AL CARRITO