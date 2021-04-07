// CARRITO DE COMPRAS

// MOSTRAR Y OCULTAR CARRITO CON ANIMACION
$('#carrito').click(function (e) { 
    e.preventDefault();

    $('#carritoInner').animate({right: 0}, 1000, function () {console.log('ok');});
    
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

$('.btn').click(function (e) { 
    e.preventDefault();
    let productoSeleccionado = productos.find(element => element.id == e.target.id);
    
    productosCarrito.push(productoSeleccionado);

    let productosCarritoJSON = JSON.stringify(productosCarrito);

    // GUARDO EN STORAGE PRODUCTOS AGREGADOS AL CARRITO
    localStorage.setItem('productosCarrito', productosCarritoJSON);

    $('#iconSinProductos, #sinProductos').hide();

    $('#productosAgregados').append(`<div class="row border-bottom pt-3 productoCarrito">
                                        <img src="${productoSeleccionado.src}" class="col-4">
                                        <p class="col-4">${productoSeleccionado.nombre}</p>
                                        <p class="col-1 offset-2 x">x</p>
                                        <p class="col-12 text-right precio">${productoSeleccionado.precio}</p>
                                     </div>`);
    
    
    
    total += productoSeleccionado.precio;

    $('#subTotal').text(`Subtotal: ${total}`);

    // ELIMINAR PRODUCTOS DEL CARRITO
    $('.x').off().click(function (e) { 
        e.preventDefault();

        let precioADescontar = parseInt(e.target.nextElementSibling.innerText);

        total -= precioADescontar;

        $(e.target.parentNode).remove();

        $('#subTotal').text(`Subtotal: ${total}`);
    });
}); 