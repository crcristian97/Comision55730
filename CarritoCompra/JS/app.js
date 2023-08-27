// Array de objetos de productos
const productos = [
    { nombre: 'Nike Gorra', precio: 10.99 },
    { nombre: 'Zapatilla', precio: 19.99 },
    { nombre: 'Reloj', precio: 5.99 },
    { nombre: 'Gorra Air', precio: 7.49 },
];

// Array para almacenar los productos seleccionados
let carrito = [];

// Obtener el elemento donde deseas agregar la lista de productos
const listaProductos = document.getElementById('listaProductos');

// Obtener el elemento de la lista de productos del carrito
const carritoLista = document.getElementById('carritoLista');

// Obtener el elemento para mostrar el total a pagar
const totalPagarElement = document.getElementById('totalPagar');

// Obtener el botón "Finalizar Compra" del modal
const finalizarCompraBtn = document.getElementById('finalizarCompra');

// Obtener el elemento para mostrar el mensaje de carrito vacío
const mensajeCarritoVacio = document.getElementById('mensajeCarritoVacio');

// Función para actualizar la lista de productos en el carrito y el total a pagar
function actualizarCarrito() {
    // Limpiar la lista del carrito antes de actualizarla
    carritoLista.innerHTML = '';

    // Calcular el total a pagar
    let totalPagar = 0;
    carrito.forEach(function(producto, index) {
        totalPagar += producto.precio;
        // Crear un elemento de lista para cada producto en el carrito
        const carritoItem = document.createElement('li');
        carritoItem.className = 'list-group-item';
        carritoItem.innerText = `${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`;

        // Agregar un botón de "Eliminar" junto a cada producto en el carrito
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger float-right ml-2';
        deleteButton.innerText = 'Eliminar';

        // Agregar el evento click al botón para eliminar el producto del carrito
        deleteButton.addEventListener('click', function() {
            carrito.splice(index, 1);
            actualizarCarrito();
        });

        // Agregar el botón de "Eliminar" como hijo del elemento de lista
        carritoItem.appendChild(deleteButton);

        // Agregar el elemento de lista al carrito
        carritoLista.appendChild(carritoItem);
    });

    // Mostrar el total a pagar
    totalPagarElement.innerText = totalPagar.toFixed(2);

    // Guardar el carrito en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Verificar si hay elementos en el carrito y mostrar un mensaje en consecuencia
    if (carrito.length > 0) {
        mensajeCarritoVacio.style.display = 'block';
    } else {
        mensajeCarritoVacio.style.display = 'none';
    }
}

// Iterar sobre el array de productos utilizando forEach
productos.forEach(function(producto) {
    // Crear un elemento de lista (por ejemplo, <li>) para cada producto
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';

    // Crear un botón para agregar el producto al carrito
    const addButton = document.createElement('button');
    addButton.className = 'btn btn-success float-right';
    addButton.innerText = 'Comprar';

    // Establecer el contenido del elemento de lista utilizando innerText
    listItem.innerText = `${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`;

    // Agregar el botón como hijo del elemento de lista
    listItem.appendChild(addButton);

    // Agregar el evento click al botón para agregar el producto al carrito
    addButton.addEventListener('click', function() {
        carrito.push(producto);
        actualizarCarrito();
    });

    // Agregar el elemento de lista a la lista de productos
    listaProductos.appendChild(listItem);
});

// Cargar el carrito desde el localStorage al cargar la página
const carritoGuardado = localStorage.getItem('carrito');
if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
}

// Agregar evento al botón "Finalizar Compra" para limpiar el carrito
finalizarCompraBtn.addEventListener('click', function() {
    carrito = [];
    actualizarCarrito();
});