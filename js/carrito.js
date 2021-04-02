// CARRITO DE COMPRAS
$('#carritoInner').hide();
// MOSTRAR Y OCULTAR CARRITO CON ANIMACION
$('#carrito').click(function (e) { 
    e.preventDefault();

    $('#carritoInner').animate({right: 0}, 1000, function () {console.log('ok');})
                      .show();
    
    $('main').css({'opacity': '0.5'});
});

$('#closeCart').click(function (e) { 
    e.preventDefault();

    $('#carritoInner').animate({right: '-400px'}, 1000, function () {console.log('ok');});

    $('main').css('opacity', '1');
});

$('#keepShopping').click(function (e) { 
    e.preventDefault();

    $('#carritoInner').animate({right: '-400px'}, 1000, function () {console.log('ok');});

    $('main').css('opacity', '1');
});

// AGREGAR PRODUCTOS AL CARRITO
let productosCarrito = [];

let total = 0;

$('button').click(function (e) { 

    console.log('sirve el click');
    let productoSeleccionado = productos.find(element => element.id == e.target.id);
    productosCarrito.push(productoSeleccionado.nombre);

    $('#iconSinProductos, #sinProductos').hide();

    $('#productosAgregados').append(`<div class="container border-bottom pt-3">
                                        <img src="${productoSeleccionado.src}" class="col-4 d-inline">
                                        <p class="d-inline">${productoSeleccionado.nombre}</p>
                                        <p class="col-12 text-right">$${productoSeleccionado.precio}</p>
                                     </div>`);

    total += productoSeleccionado.precio;
    
    $('#subTotal').text(`Subtotal: ${total}`);
});