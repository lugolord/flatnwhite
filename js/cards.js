// CREA LAS CARDS DE LOS PRODUCTOS
const products = '../js/data.json';
$.getJSON(products, function (respuesta, estado) { 
    if (estado === 'success') {

        let misProductos = respuesta;

        for (const producto of misProductos.productos) {
            $('#productos').append(`<div class="col-3 pl-0 pr-0 mb-5">
                                      <img src="${producto.src}" class="col-12">
                                      <p class="col-12 mb-0">${producto.nombre}</p>
                                      <p class="col-12" style="color: green;">$${producto.precio}</p>
                                      <button type="button" class="btn btn-outline-dark col-4 ml-3 rounded-0" id="${producto.id}">Comprar</button>
                                    </div> `);
        }

        carrito();
    }
});