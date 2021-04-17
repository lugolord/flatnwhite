// MUESTRA LA SECCION SELECCIONADA
$('#seccionTodo').click(function (e) { 
    $('#productos').fadeOut(800, function() {
        $('#productos').empty();
        for (const producto of productos) {
            $('#productos').append(`<div class="productCard col-3 p-0 mb-5">
                                      <img src="${producto.src}" class="col-12">
                                      <p class="col-12 mb-0">${producto.nombre}</p>
                                      <p class="col-12" style="color: green;">$${producto.precio}</p>
                                      <button type="button" class="btn btn-outline-dark rounded-0 col-4 ml-3" id="${producto.id}">Comprar</button
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