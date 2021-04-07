// MUESTRA LA SECCION SELECCIONADA

$('#seccionTodo').click(function (e) { 
    $('#productos').empty();

    for (const producto of productos) {
        $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                        <img src="${producto.src}" class="col-12">
                                        <p class="col-12 mb-0">${producto.nombre}</p>
                                        <p class="col-12" style="color: green;">$${producto.precio}</p>
                                        <button type="button" class="btn btn-secondary col-3 ml-3" id="${producto.id}">Comprar</button
                                    </div>`);
    }

    // AGREGAR AL CARRITO
    $('.btn').click(function (e) { 
        let productoSeleccionado = productos.find(element => element.id == e.target.id);
        
        productosCarrito.push(productoSeleccionado);

        let productosCarritoJSON = JSON.stringify(productosCarrito);

        // GUARDO EN STORAGE PRODUCTOS AGREGADOS AL CARRITO
        localStorage.setItem('productosCarrito', productosCarritoJSON);

        $('#iconSinProductos, #sinProductos').hide();

        $('#productosAgregados').append(`<div class="row border-bottom pt-3">
                                            <img src="${productoSeleccionado.src}" class="col-4">
                                            <p class="col-4">${productoSeleccionado.nombre}</p>
                                            <p class="col-1 offset-2 x">x</p>
                                            <p class="col-12 text-right">${productoSeleccionado.precio}</p>
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
});

$('#seccionCafes').click(function (e) { 
    const cafes = productos.filter(cafe => cafe.tipo == 'cafe');

    $('#productos').empty();

    for (const cafe of cafes) {
        $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                        <img src="${cafe.src}" class="col-12">
                                        <p class="col-12 mb-0">${cafe.nombre}</p>
                                        <p class="col-12" style="color: green;">$${cafe.precio}</p>
                                        <button type="button" class="btn btn-secondary col-3 ml-3" id="${cafe.id}">Comprar</button
                                    </div>`);
    }
    
    // AGREGAR AL CARRITO
    $('.btn').click(function (e) { 
        let productoSeleccionado = productos.find(element => element.id == e.target.id);
        
        productosCarrito.push(productoSeleccionado);

        let productosCarritoJSON = JSON.stringify(productosCarrito);

        // GUARDO EN STORAGE PRODUCTOS AGREGADOS AL CARRITO
        localStorage.setItem('productosCarrito', productosCarritoJSON);

        $('#iconSinProductos, #sinProductos').hide();

        $('#productosAgregados').append(`<div class="row border-bottom pt-3">
                                            <img src="${productoSeleccionado.src}" class="col-4">
                                            <p class="col-4">${productoSeleccionado.nombre}</p>
                                            <p class="col-1 offset-2 x">x</p>
                                            <p class="col-12 text-right">${productoSeleccionado.precio}</p>
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
});

$('#seccionCafeteras').click(function (e) { 

    console.log('cambio a seccion cafeteras');

    const cafeteras = productos.filter(cafetera => cafetera.tipo == 'cafetera');

    $('#productos').empty();

    for (const cafetera of cafeteras) {
        $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                        <img src="${cafetera.src}" class="col-12">
                                        <p class="col-12 mb-0">${cafetera.nombre}</p>
                                        <p class="col-12" style="color: green;">$${cafetera.precio}</p>
                                        <button type="button" class="btn btn-secondary col-3 ml-3" id="${cafetera.id}">Comprar</button
                                    </div>`);
    } 

    // AGREGAR AL CARRITO
    $('.btn').click(function (e) { 
        let productoSeleccionado = productos.find(element => element.id == e.target.id);
        
        productosCarrito.push(productoSeleccionado);

        let productosCarritoJSON = JSON.stringify(productosCarrito);

        // GUARDO EN STORAGE PRODUCTOS AGREGADOS AL CARRITO
        localStorage.setItem('productosCarrito', productosCarritoJSON);

        $('#iconSinProductos, #sinProductos').hide();

        $('#productosAgregados').append(`<div class="row border-bottom pt-3">
                                            <img src="${productoSeleccionado.src}" class="col-4">
                                            <p class="col-4">${productoSeleccionado.nombre}</p>
                                            <p class="col-1 offset-2 x">x</p>
                                            <p class="col-12 text-right">${productoSeleccionado.precio}</p>
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
});