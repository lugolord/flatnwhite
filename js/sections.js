// MUESTRA LA SECCION SELECCIONADA

$('#seccionTodo').click(function (e) { 
    e.preventDefault();
    $('#productos').empty();
    for (const producto of productos) {
        $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                        <img src="${producto.src}" class="col-12">
                                        <p class="col-12 mb-0">${producto.nombre}</p>
                                        <p class="col-12" style="color: green;">$${producto.precio}</p>
                                        <button type="button" class="btn btn-secondary col-3 ml-3">Comprar</button
                                    </div>`);
    }
           
});

$('#seccionCafes').click(function (e) { 
    e.preventDefault();
    const cafes = productos.filter(cafe => cafe.tipo == 'cafe');
    $('#productos').empty();
    for (const cafe of cafes) {
        $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                        <img src="${cafe.src}" class="col-12">
                                        <p class="col-12 mb-0">${cafe.nombre}</p>
                                        <p class="col-12" style="color: green;">$${cafe.precio}</p>
                                        <button type="button" class="btn btn-secondary col-3 ml-3">Comprar</button
                                    </div>`);
    }
           
});

$('#seccionCafeteras').click(function (e) { 
    e.preventDefault();
    const cafeteras = productos.filter(cafetera => cafetera.tipo == 'cafetera');
    $('#productos').empty();
    for (const cafetera of cafeteras) {
        $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                        <img src="${cafetera.src}" class="col-12">
                                        <p class="col-12 mb-0">${cafetera.nombre}</p>
                                        <p class="col-12" style="color: green;">$${cafetera.precio}</p>
                                        <button type="button" class="btn btn-secondary col-3 ml-3">Comprar</button
                                    </div>`);
    }
           
});