// MUESTRA LA SECCION SELECCIONADA
$('#seccionTodo').click(function (e) { 
    $('#productos').fadeOut(800, function() {
        $('#productos').empty();
        for (const producto of productos) {
            $('#productos').append(`<div class="col-12 col-sm-6 col-md-4 col-xl-3 pl-0 pr-0 p-xl-0 mb-5">
                                      <img src="${producto.src}" class="col-12">
                                      <p class="col-12 mb-0">${producto.nombre}</p>
                                      <p class="col-12" style="color: green;">$${producto.precio}</p>
                                      <button type="button" class="btn btn-outline-dark col-10 col-xl-4 offset-1 ml-xl-3 rounded-0 btnCompra" id="${producto.id}">Comprar</button
                                    </div>`);
        }
    });

    $('#productos').fadeIn(function() {
        carrito();
    });
});

construirSeccion('accesorio');

construirSeccion('cafe');

construirSeccion('cafetera');