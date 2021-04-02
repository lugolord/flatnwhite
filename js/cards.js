// CREA LAS CARDS DE LOS PRODUCTOS
for (const producto of productos) {
    $('#productos').append(`<div class="productCard col-4 p-0 mb-5">
                                <img src="${producto.src}" class="col-12">
                                <p class="col-12 mb-0">${producto.nombre}</p>
                                <p class="col-12" style="color: green;">$${producto.precio}</p>
                                <button type="button" class="btn btn-secondary col-3 ml-3" id="${producto.id}">Comprar</button
                            </div> `);
};