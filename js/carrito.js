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

// BOTON PARA VACIAR TODO EL CARRITO
$('#vaciarCarrito').click(function (e) { 
    totalProductosAñadidos=0; //REINICIO EL CONTADOR DEL CARRITO
    $('#productosAñadidosAlCarrito').text(totalProductosAñadidos);

    total = 0; //REINICIO EL SUBTOTAL

    $('#vaciarCarrito').css({'visibility': 'hidden'});

    $('#productosAgregados, #subTotal').empty(); //ELIMINO TODOS LOS PRODUCTOS Y EL SUBTOTAL DEL CARRITO VISUAL

    //MUESTRO DE NUEVO PREVIEW SIN PRODUCTOS
    $('#productosAgregados').append(`<i class="far fa-times-circle fa-3x col-12 text-center" id="iconSinProductos"></i>
                                     <p class="col-12 text-center" id="sinProductos">No hay productos en el carrito</p>`);

    $('#keepShopping').off().click(function (e) {  
        cerrarCarrito();
    });

    $('#keepShopping').text('Seguir comprando')
                      .removeAttr('class');
});