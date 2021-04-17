function carrito() {
    $('.btn').click(function (e) { // EVENTO PARA AGREGAR AL CARRITO VISUAL
    
        let productoSeleccionado = productos.find(element => element.id == e.target.id); //FILTRO POR ID   
        productosCarrito.push(productoSeleccionado); //AGREGO AL ARRAY DE PRODUCTOS DEL CARRITO

        agregarAlStorage(); //AGREGO PRODUCTOS AGREGADOS AL CARRITO AL STORAGE

        $('#iconSinProductos, #sinProductos').hide(); //OCULTO PREVIEW SIN PRODUCTOS

        totalProductosAñadidos++; //SUMO AL CONTADOR CADA VEZ QUE AGREGO UN NUEVO PRODUCTO
        $('#productosAñadidosAlCarrito').text(totalProductosAñadidos);

        //AGREGO INFO DEl PRODUCTO AL CARRITO VISUAL
        $('#productosAgregados').append(`<div class="row border-bottom pt-3">
                                           <img src="${productoSeleccionado.src}" class="col-4">
                                           <p class="col-4">${productoSeleccionado.nombre}</p>
                                           <p class="col-1 offset-2 x">x</p>
                                           <p class="col-12 text-right">${productoSeleccionado.precio}</p>
                                         </div>`);
        
        $('#keepShopping').text('Finalizar compra');

        //CAMBIO EL TEXTO DEL BOTON A "FINALIZAR COMPRA" Y SI LO CLIQUEO DISPARO ALERTA SIMULANDO LA FINALIZACION DE LA COMPRA
        if ($('#keepShopping').text() == 'Finalizar compra') {
            $('#keepShopping').off().click(function (e) { 
                e.preventDefault();
                alert('Compra finalizada. Muchas gracias!')
            });
        }; 

        calcularTotal(productoSeleccionado.precio); //CALCULO EL TOTAL DE COMPRA

        eliminarDelCarritoVisual(); //ELIMINO DEL CARRITO VISUAL Y RESTO DEL TOTAL DE COMPRA
    });
};

//ELIMINO PRODUCTOS DEL CARRITO VISUAL, RESTO SUS PRECIOS DEL TOTAL DE COMPRA Y VUELVO A MOSTRAR BOTON "SEGUIR COMPRANDO"
function eliminarDelCarritoVisual() { 
    $('.x').off().click(function (e) { 
        e.preventDefault();
        console.log(productosCarrito);

        let precioADescontar = parseInt(e.target.nextElementSibling.innerText);

        total -= precioADescontar;

        totalProductosAñadidos--; //RESTO AL SUPERINDICE DEL CARRITO CADA VEZ QUE ELIMINO UN PRODUCTO
        $('#productosAñadidosAlCarrito').text(totalProductosAñadidos);

        $(e.target.parentNode).remove();

        $('#subTotal').text(`Subtotal: ${total}`);

        if (total == 0) {
            $('#iconSinProductos, #sinProductos').show(); //AL LLEGAR A 0 EL SUBTOTAL MUESTRO DE NUEVO "NO HAY PRODUCTOS EN EL CARRITO"
            $('#subTotal').hide();
            //AL LLEGAR A 0 CAMBIO EL TEXTO A "SEGUIR COMPRANDO" Y CIERRO EL CARRITO CON ANIMACION
            $('#keepShopping').text('Seguir comprando'); 
            $('#keepShopping').off().click(function (e) {  
                e.preventDefault();
            
                cerrarCarrito();
            });
        }
    });
};

function calcularTotal(precios) { //CALCULA EL TOTAL DE LA COMPRA AL IR AÑADIENDO PRODUCTOS AL CARRITO
    total += precios;
    
    $('#subTotal').html(`<div class="border-bottom border-top p-3 col-12">Subtotal: ${total}</div>`)
                  .show();
}

function agregarAlStorage() { //AGREGA AL LOCAL STORAGE
    let productosCarritoJSON = JSON.stringify(productosCarrito);
    
    localStorage.setItem('productosCarrito', productosCarritoJSON);
}

function cerrarCarrito() { //CIERRA EL CARRITO VISUAL
    $('#carritoInner').animate({right: '-400px'}, 1000, function () {console.log('ok');});
    
    $('#productos, main').css('opacity', '1');
}

function construirSeccion(x) { //CONSTRUYE LAS CARDS POR CATEGORIA
    $('#' + x).click(function (e) { 
        const item = productos.filter(item => item.tipo == x);
        $('#productos').fadeOut(800, function() {
            $('#productos').empty();
            for (const whatever of item) {
                $('#productos').append(`<div class="productCard col-3 p-0 mb-5">
                                          <img src="${whatever.src}" class="col-12">
                                          <p class="col-12 mb-0">${whatever.nombre}</p>
                                          <p class="col-12" style="color: green;">$${whatever.precio}</p>
                                          <button type="button" class="btn btn-outline-dark rounded-0 col-4 ml-3" id="${whatever.id}">Comprar</button
                                        </div>`);
            }
        });
        $('#productos').fadeIn(function() {
            carrito();
        });
    });
}

function abrirYCerrarBarraBusqueda() { //MUESTRA Y OCULTA LA BARRA DE BUSQUEDA
    $('#buscar').click(function (e) { 
        e.preventDefault();
    
        $('#barraBusquedaContenedor').animate({height: '60px'}, 1000);
    
        $('#barraBusquedaContenedor').html(`<input type="text" placeholder="Buscar productos" id="barraBusqueda" style="height: 60px; width: 1000px;" class="border-0 p-0">
                                            <i class="fas fa-times float-right p-3" id="cerrarBarraBusqueda"></i>`);
    
        $('#cerrarBarraBusqueda').click(function (e) {
            $('#barraBusquedaContenedor').animate({height: 0}, 1000);
    
            $('#barraBusquedaContenedor').empty();
        });

        filtrar();
        
    });
}

abrirYCerrarBarraBusqueda();

function filtrar() { //FILTRA LOS RESULTADOS BUSCADOS EN LA BARRA DE BUSQUEDA
    $('#barraBusqueda').change(function (e) { 
        let texto = e.target.value.toLowerCase();
        
        $('#productos').empty();

        for (const producto of productos) {
            let nombre = producto.nombre.toLowerCase();

            if (nombre.indexOf(texto) !== -1) {
                $('#productos').append(`<div class="col-3 pl-0 pr-0 mb-5">
                                          <img src="${producto.src}" class="col-12">
                                          <p class="col-12 mb-0">${producto.nombre}</p>
                                          <p class="col-12" style="color: green;">$${producto.precio}</p>
                                          <button type="button" class="btn btn-outline-dark col-4 ml-3 rounded-0" id="${producto.id}">Comprar</button>
                                        </div> `);
            }
        }

        carrito();
    });
}